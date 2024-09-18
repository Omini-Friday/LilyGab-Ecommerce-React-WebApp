import React from "react";
import ProductHd from "../components/ProductHd";
import { useParams } from "react-router-dom";
import all_products from "../assets/all_products";
import PopularProducts from "../components/PopularProducts";
import ProductDescription from "../components/ProductDescription";
import ProductDisplay from "../components/ProductDisplay";

function Product() {
  const { productId } = useParams();
  const product = all_products.find((e) => e.productId === productId);
  if (!product) return <div>Product not found</div>;
  return (
    <section>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <PopularProducts />
      </div>
    </section>
  );
}

export default Product;
