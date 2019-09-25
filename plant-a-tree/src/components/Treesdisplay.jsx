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
          <img src={NZ_Kauri} alt={cat} width="200px" height="200px"></img>{" "}
        </Link>
      );
    }
  }
  return (
    <div wrap="true" className="toolwrap">
      {importimages(product_id)}
      <div className="toolitem">
        <div className="toolitemdetails">
          <h2>{product_name}</h2>
          <p1>{description}</p1>
          <span className="price">{product_price} NZ$</span>
          <button width="135px" color="#F4FF77" radius="50px" class="btnitem">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
