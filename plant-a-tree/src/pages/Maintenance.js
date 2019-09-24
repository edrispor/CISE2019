import React from "react";
import Fast from "../components/Maintenance";
import { Link } from "react-router-dom";
export default function Maintenance() {
  return (
    <div>
      <br></br>
      <br></br>
      <h3>Links</h3>
      <ul>
        <li>
          <Link to="/items/trees">Trees Page</Link>
        </li>
        <li>
          <Link to="/items/tools">Tools Page</Link>
        </li>
      </ul>
      <p>This is Garden Maintenance Page.</p>
      <Fast></Fast>
    </div>
  );
}
