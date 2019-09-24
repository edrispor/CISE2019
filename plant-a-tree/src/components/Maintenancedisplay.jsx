import React from "react";

export default function Maintenancedisplay({ maintain }) {
  let { product_id, product_name, product_price, description } = maintain;
  return (
    <article>
      <div>
        {product_id} | {product_name} | {product_price} | {description} |{" "}
      </div>
    </article>
  );
}
