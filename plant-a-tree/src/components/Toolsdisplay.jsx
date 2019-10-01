import React from "react";
import { Link } from "react-router-dom";
import Shovel from "../images/shovel.jpeg";
import Rake from "../images/rake.jpeg";
import Hoe from "../images/hoe.jpeg";
import cat from "../images/cat.jpeg";
<<<<<<< HEAD
import Product from "../pages/Product";
=======
>>>>>>> db63fe1a22134c290858a980a5175f10e2439724

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

  function importimages(product_id, product_name, description, tool) {
    if (product_id == 21) {
      return (
        <div className="shovel">
<<<<<<< HEAD
          <Link to={`/product/${product_id}`} tool={tool}>
            <Product
              key={tool.product_id}
              getproduct={(product_id, product_name, description)}
            ></Product>
            <img src={Shovel} alt={cat} width="200px" height="150px"></img>{" "}
=======
          <Link to={`/items/tools/${slug}`}>
            <img src={Shovel} alt={cat} width="200px" height="150px"></img>
>>>>>>> db63fe1a22134c290858a980a5175f10e2439724
          </Link>
        </div>
      );
    } else if (product_id == 22) {
      return (
<<<<<<< HEAD
        <Link to={`/product/${product_id}`}>
          <img src={Rake} alt={cat} width="200px" height="150px"></img>{" "}
=======
        <Link to={`/items/tools/${slug}`}>
          <img src={Rake} alt={cat} width="200px" height="150px"></img>
>>>>>>> db63fe1a22134c290858a980a5175f10e2439724
        </Link>
      );
    } else if (product_id == 23) {
      return (
<<<<<<< HEAD
        <Link to={`/product/${product_id}`}>
          <img src={Hoe} alt={cat} width="200px" height="150px"></img>{" "}
=======
        <Link to={`/items/tools/${slug}`}>
          <img src={Hoe} alt={cat} width="200px" height="150px"></img>
>>>>>>> db63fe1a22134c290858a980a5175f10e2439724
        </Link>
      );
    }
  }
  return (
    <div wrap="true" className="itemwrap">
<<<<<<< HEAD
      {importimages(product_id, product_id, product_name, description, tool)}
=======
      <div className="itemimg">{importimages(product_id)}</div>
>>>>>>> db63fe1a22134c290858a980a5175f10e2439724
      <div className="item">
        <div className="itemdetails">
          <h2>{product_name}</h2>
          <p1>{description}</p1>
          <span className="price">${product_price}</span>
          <button width="135px" color="#F4FF77" radius="50px" class="btnitem">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
