import React from "react";
import Tools from "../components/Tools";
import { Link } from "react-router-dom";
export default function Tool() {
  return (
    <div className="pagelayout">
      <Link to="/">Home</Link>
      <p> > All Tools</p>
      <h3>Links</h3>
      <ul className="product-menu">
        <li>
          <Link to="/items/trees">Trees Page</Link>
        </li>
        <li>
          <Link to="/items/maintenance">Garden Maintenance Page</Link>
        </li>
      </ul>
      <Tools></Tools>
    </div>
  );
}
