import React from "react";
import Maincategories from "../components/Maincategories";
import Products from "../components/Products";

export default function Items() {
  return (
    <div className="pagelayout">
      <div className="items-page">
        <p>This is All Items Page.</p>
        <Maincategories></Maincategories>
        <Products></Products>
      </div>
    </div>
  );
}
