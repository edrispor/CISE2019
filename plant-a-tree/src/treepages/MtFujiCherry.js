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
            The famous "Mt. Fuji Cherry" forms a beautifully propotioned, small,
            flat-topped tree with horizontal, slightly drooping branches that
            bear very large, pure white scented flowers that are a mix of both
            single and semi-doubles. Leaves are deeply serrated and turn a
            distinctive golden-yellow in autumn. 'Shirotae' is one of the most
            gorgeous white-flowering cherries.
          </p>
          <p>
            Care: Performs best in full sun in moist, relatively fertile,
            well-drained soils. Watch for caterpillars, silver leaf and blossom
            wilt.
          </p>
          <ul>
            <li>Hardwood, Devidous</li>
            <li>Sunlight needed: High</li>
            <li>Max mature height: 6m</li>
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
