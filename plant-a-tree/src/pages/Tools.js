import React from "react";
import Tools from "../components/Tools";
import Maincategories from "../components/Maincategories";
export default function Tool() {
  return (
    <div className="pagelayout">
      <p>This is All Tools Page.</p>
      <Maincategories></Maincategories>
      <Tools></Tools>
    </div>
  );
}
