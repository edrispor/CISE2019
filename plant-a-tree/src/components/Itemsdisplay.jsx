import React from "react";
import { Link } from "react-router-dom";

export default function Itemsdisplay({ item }) {
  let { product_id, product_name, product_price } = item;
  return (
    <div>
      <br></br>
      <h2>
        {product_id} | {product_name}
      </h2>
    </div>
  );
}
