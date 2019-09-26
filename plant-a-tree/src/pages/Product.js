import React from "react";

export default function Product(getproduct) {
  console.log(getproduct.props);
  let { product_id, product_name, description } = getproduct;
  return (
    <div>
      <h1>
        This is gonna contain all the items slug and it will contain{" "}
        {product_id} and {product_name} yooo.
      </h1>
      <p>lorem {description}</p>
    </div>
  );
}
