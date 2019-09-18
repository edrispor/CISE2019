import React from "react";
import Maincategories from "../components/Maincategories";
import Featured from "../components/Featured";

export default function Home() {
  return (
    /*<Featured
      title="TREE SALE!!"
      subtitle="deluxe trees starting at $299"
    ></Featured>*/
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
