import React from "react";
import { Link } from "react-router-dom";
import Kauri from "../TreeImages/Kauri-1.jpg";

export default function NZKauri() {
  return (
    <div className="pagelayout">
      <Link to="/">Home</Link>
      <Link to="/items/trees"> > Trees</Link>
      <p>> New Zealand Native</p>
      <h1>New Zealand Kauri</h1>
      <h4>AGATHIS AUSTRALIS</h4>
      <div className="specific-tree-page">
        <div className="kauridetails">
          <img src={Kauri} alt="Kauri" width="300px" height="500px" />
        </div>
        <div className="kauridetails">
          <p>
            An iconic NZ tree, this mighty forest giant can reach up to 50m in
            maturity. Its leaves are green, glossy, oval and leathery, with
            layered branches, making a great natural canopy. The Kauri needs
            lots of space to grow, making it great for open sections or large
            gardens. Although kauri are tolerant of a wide range of conditions,
            they prefer a rich, moist soil and grow better if not too exposed.
            Try planting in groves for a majestic effect now and in years to
            come.
          </p>
          <p>
            Care: Plant in tight groves to create your own Kauri stand. Remember
            with time these trees will become big, so ensure you have enough
            room.
          </p>
          <ul>
            <li>Evergreen, NZ Native, Hardwood</li>
            <li>Sunlight needed: Medium</li>
            <li>Max mature height: 50m</li>
            <li>Growth rate: Medium</li>
          </ul>
          <button width="135px" color="#F4FF77" radius="50px" class="btnitem">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
