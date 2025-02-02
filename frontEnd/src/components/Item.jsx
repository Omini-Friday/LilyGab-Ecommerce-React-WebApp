import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Item({ id, name, category, image, new_price, old_price }) {
  return (
    <Link to={`/product/${id}`} className="bg-white p-4 rounded-xl relative">
      <div className=" flexCenter">
        <img
          src={image}
          alt={name}
          height={211}
          width={211}
          className="rounded-lg drop-shadow-xl absolute bottom-44"
        />
      </div>

      <div className="flex flex-col gap-y-3 pt-24">
        <h4 className="line-clamp-2 medium-16">{name}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          temporibus.
        </p>
        <div className="flexBetween">
          <div className="flex gap-x-4 medium-16">
            <span>₦{new_price}:00</span>
            <span>₦{old_price}:00</span>
          </div>
          <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
        </div>
      </div>
    </Link>
  );
}

export default Item;
