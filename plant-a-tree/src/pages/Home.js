import React from "react";
import Maincategories from "../components/Maincategories";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <>
      <div className="home-page">
        <main>
          <Featured>
            <title>SALE!!!</title>
            <subtitle>Selected trees 15% off!</subtitle>
          </Featured>
          <h1>Welcome to Plant-A-Tree, by TreeCo.</h1>
          <p>Powered by Terra-Byte.</p>
          <div>
            <Maincategories></Maincategories>
          </div>
        </main>
      </div>
    </>
  );
}
