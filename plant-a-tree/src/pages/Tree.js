import React from "react";
import Trees from "../components/Trees";
import { Link } from "react-router-dom";
export default function Tree() {
  return (
    <div>
      <br></br>
      <br></br>
      <h3>Links</h3>
      <ul>
        <li>
          <Link to="/items/tools">Tools Page</Link>
        </li>
        <li>
          <Link to="/items/maintenance">Garden Maintenance Page</Link>
        </li>
      </ul>
      <p>This is Tree Page</p>
      <Trees></Trees>
    </div>
  );
}
