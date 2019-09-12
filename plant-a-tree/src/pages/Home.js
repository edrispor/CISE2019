import React from "react";
import Maincategories from "../components/Maincategories";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div className="home-page">
      <p>This is from home page</p>
      <div>
        <Maincategories></Maincategories>
      </div>
      <div>
        <Featured></Featured>
      </div>
    </div>
  );
}
