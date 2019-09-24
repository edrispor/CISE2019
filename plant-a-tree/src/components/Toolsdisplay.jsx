import React from "react";
import { Link } from "react-router-dom";
import cat from "../images/cat.jpeg";
import Shovel from "../images/shovel.jpeg";
import Rake from "../images/rake.jpeg";
import Hoe from "../images/hoe.jpeg";

export default function Toolsdisplay({ tool }) {
  console.log(tool);
  let {
    product_id,
    product_name,
    description,
    product_price,
    photo_link,
    slug
  } = tool;
  let imgtemp = String(photo_link);
  //  <Link to={`/items/tools/${slug}`}> </Link>
  function importimages(product_id) {
    if (product_id == 21) {
      return (
        <Link to={`/items/tools/${slug}`}>
          {""}
          {product_name} <img src={Shovel} alt={cat}></img>{" "}
        </Link>
      );
    } else if (product_id == 22) {
      return (
        <Link to={`/items/tools/${slug}`}>
          {" "}
          {product_name} <img src={Rake} alt={cat}></img>{" "}
        </Link>
      );
    } else if (product_id == 23) {
      return (
        <Link to={`/items/tools/${slug}`}>
          {" "}
          {product_name} <img src={Hoe} alt={cat}></img>{" "}
        </Link>
      );
    }
  }
  return (
    <article>
      <div>
        ola {product_id} | {product_name} | {description} | {product_price}|{" "}
        This is the link:
        {photo_link} | this is the slug : {slug}
      </div>
      <div> This should show images {importimages(product_id)}</div>
    </article>
  );
}
