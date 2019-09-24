import React from "react";
import Maincategories from "../components/Maincategories";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Items() {
  return (
    <div className="pagelayout">
      <div className="items-page">
        <h3>Links...</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/items/trees">Trees Page</Link>
          </li>
          <li>
            <Link to="/items/tools">Tools Page</Link>
          </li>
          <li>
            <Link to="/items/maintenance">Garden Maintenance Page</Link>
          </li>
        </ul>

        <Maincategories></Maincategories>
        <Products></Products>
      </div>
    </div>
  );
}
