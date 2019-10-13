import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pagelayout">
      <main>
        <Banner
          title="Spring Sale"
          subtitle="All Tools on sale! Till end of October."
        >
          <Link to="/sales" className="btnsale">
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
