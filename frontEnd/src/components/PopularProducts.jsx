import React from "react";
import POPULAR from "../assets/popular";
import Item from "../components/Item";

function PopularProducts() {
  return (
    <section className="max-padd-container bg-primary p-12 xl:py-28">
      <div className=" text-center wx-auto">
        <h3 className="h3">Popular Products</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est neque
          nemo aliquam nostrum possimus sed?
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
        {POPULAR.map((item) => {
          <Item
            name={item.name}
            category={item.category}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            key={item.id}
          />;
        })}
      </div>
    </section>
  );
}

export default PopularProducts;
