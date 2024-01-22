import React from "react";
import { useSelector } from "react-redux";

const CartComponent = () => {
  const cart = useSelector((state) => state.cartReducer.initialCartCount);
  console.log(cart);
  return <div>{cart}</div>;
};

export default CartComponent;
