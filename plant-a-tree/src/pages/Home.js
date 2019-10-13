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
          <Link to="/items" className="btnsale">
            Search Products
          </Link>
        </Banner>
        <br></br>
        <h1>Welcome to Plant-A-Tree, by TreeCo.</h1>
        <p>Powered by Terra-Byte.</p>
        <ul className="product-menu">
          <li>
            <Link to="/items/trees">Trees</Link>
          </li>
          <li>
            <Link to="/items/tools">Tools</Link>
          </li>
          <li>
            <Link to="/items/maintenance">Garden Maintenance</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
