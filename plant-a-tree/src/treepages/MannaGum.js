import React from "react";
import { Link } from "react-router-dom";
import MannaGum from "../TreeImages/mannagum.jpg";

export default function NZKauri() {
  return (
    <div className="pagelayout">
      <Link to="/">Home</Link>
      <Link to="/items/trees"> > Trees</Link>
      <p>> Gum Trees</p>
      <h1>Manna Gum Tree</h1>
      <h4>EUCALYPTUS VIMINALIS</h4>
      <div className="specific-tree-page">
        <div className="mannadetails">
          <img src={MannaGum} alt="MannaGum" width="300px" height="250px" />
        </div>
        <div className="mannadetails">
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
