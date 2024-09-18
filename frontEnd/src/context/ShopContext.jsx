import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const contextValue = { all_products, cartItems };

  //   const addToCart = (itemId){
  //   setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
  // }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
