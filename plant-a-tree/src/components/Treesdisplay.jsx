import React from "react";
import { Link } from "react-router-dom";
export default function Treesdisplay({ tree }) {
  let {
    product_id,
    product_name,
    latin_name,
    product_price,
    QOH,
    tree_type,
    maintenaince,
    sunlight,
    soil_drainage,
    height,
    growth_rate,
    description,
    photo_link,
    tags
  } = tree;
  return (
    <article>
      <div>
        {product_id} | {product_name} | {latin_name} | {product_price} |{" "}
      </div>
    </article>
  );
}
