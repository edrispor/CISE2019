import React from "react";
import Tools from "../components/Tools";
import { Link } from "react-router-dom";
import Maincategories from "../components/Maincategories";
export default function Tool() {
  return (
    <div className="pagelayout">
      <Link to="/">Home</Link>
      <p> > All Tools</p>
      <Tools></Tools>
    </div>
  );
}
