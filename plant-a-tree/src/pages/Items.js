import React from "react";
import { Link } from "react-router-dom";
import Allitems from "../components/Items";

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

        <br />
        <br />
        <Allitems></Allitems>
        <Maincategories></Maincategories>

        <Products></Products>
      </div>
    </div>
  );
}
