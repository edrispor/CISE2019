import React from "react";
import { Link } from "react-router-dom";
import Fertiliser from "../images/fertiliser.jpg";
import Bucket from "../images/bucket.jpg";

export default function Maintenancedisplay({ maintain }) {
  let { product_id, product_name, product_price, description, slug } = maintain;

  function importimages(product_id) {
    if (product_id == 30) {
      return (
        <div className="Fertiliser">
          <Link to={`/items/maintenance/${slug}`}>
            <img
              src={Fertiliser}
              alt={Fertiliser}
              width="130px"
              height="150px"
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id == 31) {
      return (
        <div className="Bucket">
          <Link to={`/items/maintenance/${slug}`}>
            <img src={Bucket} alt={Bucket} width="200px" height="150px"></img>{" "}
          </Link>
        </div>
      );
    }
  }

  return (
    <div wrap="true" className="itemwrap">
      <div className="itemimg">{importimages(product_id)}</div>
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
