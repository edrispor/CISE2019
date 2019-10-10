import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  return (
    <div className="pagelayout">
      <Link to="/">Home</Link>
      <p>> Shopping Cart</p>
      <section id="section-cart" class="grid">
        <div class="content-wrap">
          <br></br>
          <br></br>
          <Cart></Cart>
          <Link to="/storelocator">Company Branches</Link>
        </div>
      </section>
    </div>
  );
}
