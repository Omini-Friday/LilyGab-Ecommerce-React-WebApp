import mongoose from "mongoose";

//8 connect to database
export const dbConnection = () => {
  console.log("database connection established");
  return mongoose.connect(process.env.MONGO_URI);
};
