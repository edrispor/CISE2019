import React from "react";
import Maincategories from "../components/Maincategories";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Items() {
  return (
    <div className="pagelayout">
      <div className="items-page">
        <Link to="/">Home</Link>
        <p> > All Products</p>
        <Maincategories></Maincategories>
        <Products></Products>
      </div>
    </div>
  );
}
