import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import PopularProducts from "../components/PopularProducts";
import RelatedProducts from "../components/RelatedProducts";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <PopularProducts />
      <RelatedProducts />
    </>
  );
}

export default Home;
