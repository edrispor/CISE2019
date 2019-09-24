import React from "react";
import Tools from "../components/Tools";
import Maincategories from "../components/Maincategories";
import { Link } from "react-router-dom";
export default function Tool() {
  return (
    <div className="pagelayout">
      <h3>Links</h3>
      <ul>
        <li>
          <Link to="/items/trees">Trees Page</Link>
        </li>
        <li>
          <Link to="/items/maintenance">Garden Maintenance Page</Link>
        </li>
      </ul>
      <p>This is All Tools Page.</p>

      <Tools></Tools>
    </div>
  );
}
