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

  function importimages(product_id) {
    if (product_id == 21) {
      return (
        <div className="shovel">
          <Link to={`/items/tools/${slug}`}>
            <img src={Shovel} alt={cat} width="200px" height="150px"></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id == 22) {
      return (
        <Link to={`/items/tools/${slug}`}>
          <img src={Rake} alt={cat} width="200px" height="150px"></img>{" "}
        </Link>
      );
    } else if (product_id == 23) {
      return (
        <Link to={`/items/tools/${slug}`}>
          <img src={Hoe} alt={cat} width="200px" height="150px"></img>{" "}
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
          <span className="price">$39.99</span>
          <button width="135px" color="#F4FF77" radius="50px" class="btnitem">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
