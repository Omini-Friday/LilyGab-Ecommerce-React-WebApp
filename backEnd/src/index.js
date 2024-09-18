import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import path from "path";
import multer from "multer";
import cors from "cors";
import { timeStamp } from "console";

const app = express();

app.use(express.json());

//set cross origin resource sharing middleware
app.use(cors());

//set port to 3000
const port = 3000;

//connect to mongodb remote server
mongoose.connect(
  "mongodb+srv://friday:xUN4WiTZIp9f6FyS@atlascluster.zyvymig.mongodb.net/marketplace"
);

// Create routes for the specified service/resources requested by the client
app.get("/", (req, res) => {
  res.send("Message to the server, received");
});

const storage = multer.diskStorage({
  destination: "./upload" /* "../upload/images/ */,
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/upload", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    message: "file uploaded successfully",
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(`server error ${error}`);
  }
});

//set Schema for upload
const uploadSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number,
      required: true,
    },
    old_price: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timeStamp: true }
);

//set upload model for uploads
const ProductModel = mongoose.model("ProductModel", uploadSchema);

//Upload a new product to local database
app.post("/addproduct", async (req, res) => {
  //check if product already exists
  const productExists = await ProductModel.findOne({ id: req.body.id });
  if (productExists) {
    return res.status(400).json({ message: "Product already exists" });
  }
  //create new product
  const newProductToUpload = new ProductModel({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    available: req.body.available,
  });

  //save newly created product to the database
  await newProductToUpload.save();
  res.json({
    message: "Product uploaded successfully",
    product_id: newProductToUpload._id,
    product: newProductToUpload,
  });

  //send email notification to admin
  //...
});
