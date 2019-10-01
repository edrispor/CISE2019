import React from "react";
import shoppingcart from "../images/shoppingcart.svg";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="pagelayout">
      <h1>Shopping Cart</h1>
      <div className="cart-page">
        <div className="cartempty">
          <img src={shoppingcart} alt="Cart" className="cart1" />
          <p>Your cart is empty!</p>
          <Link to="/items"> Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
