import React from "react";
import { Link } from "react-router-dom";
import NZ_Kauri from "../images/Kauri_tree.jpg";
import cat from "../images/cat.jpeg";
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
    tags,
    slug
  } = tree;

  function importimages(product_id) {
    if (product_id == 1) {
      return (
        <Link to={`/items/trees/${slug}`}>
          {""}
          {product_name} <img src={NZ_Kauri} alt={cat}></img>{" "}
        </Link>
      );
    }
  }
  return (
    <article>
      <div>
        {product_id} | {product_name} | {latin_name} | {product_price} |{" "}
      </div>
      <div> This should show images {importimages(product_id)}</div>
    </article>
  );
}
