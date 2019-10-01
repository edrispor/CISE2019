import React from "react";
import { Link } from "react-router-dom";
import MtFujiCherry from "../TreeImages/mtfuji.jpg";

export default function NZKauri() {
  return (
    <div className="pagelayout">
      <Link to="/">Home</Link>
      <Link to="/items/trees"> > Trees</Link>
      <p>> Decidous</p>
      <h1>Mt Fuji Cherry Tree</h1>
      <h4>PRUNUS 'SHIROTAE'</h4>
      <div className="specific-tree-page">
        <div className="fujidetails">
          <img src={MtFujiCherry} alt="Fuji" width="300px" height="300px" />
        </div>
        <div className="fujidetails">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Care: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim
          </p>
          <ul>
            <li>Hardwood, Devidous</li>
            <li>Sunlight needed: Medium</li>
            <li>Max mature height: 20m</li>
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
