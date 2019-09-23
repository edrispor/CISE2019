import React from "react";
import { Link } from "react-router-dom";
import cat from "../images/cat.jpeg";
import shovel from "../images/shovel.jpeg";
export default function Toolsdisplay({ tool }) {
  console.log(tool);
  let {
    product_id,
    product_name,
    description,
    product_price,
    photo_link
  } = tool;
  let imgtemp = String(photo_link);

  return (
    <article>
      <div>
        ola {product_id} | {product_name} | {description} | {product_price}|{" "}
        {photo_link}
      </div>
      <div>
        <img src={imgtemp} alt={cat}></img>
      </div>
    </article>
  );
}
