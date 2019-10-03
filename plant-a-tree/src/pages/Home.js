import React from "react";
import Maincategories from "../components/Maincategories";
import Tools from "../components/Tools";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pagelayout">
      <main>
        <Banner
          title="Spring Sale"
          subtitle="Selected trees 15% off! Till end of October."
        >
          <Link to="/sales" className="btnsale">
            Search Products
          </Link>
        </Banner>
        <br></br>
        <h1>Welcome to Plant-A-Tree, by TreeCo.</h1>
        <p>Powered by Terra-Byte.</p>
        <div>
          <Maincategories></Maincategories>
          <Tools></Tools>
        </div>
      </main>
    </div>
  );
}
