import React, { Component } from "react";

import { Link } from "react-router-dom";
import Fertiliser from "../images/fertiliser.jpg";
import Bucket from "../images/bucket.jpg";
import cat from "../images/cat.jpeg";

export default class Maintenance extends Component {
  constructor() {
    super();
    this.state = {
      maintenance: []
    };
    this.onclickproduct = this.onclickproduct.bind(this);
    this.importimages = this.importimages.bind(this);
  }

  componentDidMount() {
    this.getMaintenance();
  }

  getMaintenance = _ => {
    fetch("/garden_main")
      .then(response => response.json())
      .then(response => this.setState({ maintenance: response.data }))
      .catch(err => console.error(err));
  };
  onclickproduct(product_id) {
    var resultID = this.state.maintenance.findIndex(
      entry => entry.product_id === product_id
    );
    localStorage.setItem("maintenanceID", resultID);
    console.log(localStorage.getItem("maintenanceID"));
  }
  render() {
    let { maintenance } = this.state;
    console.log(maintenance);
    maintenance = maintenance.map(maintain => {
      return (
        <li key={maintain.product_id} maintain={maintain} className="itemlist">
          <div wrap="true" className="itemwrap">
            <div className="itemimg">
              {this.importimages(maintain.product_id)}
            </div>
            <div className="item">
              <div className="itemdetails">
                <h2>{maintain.product_name}</h2>
                <p1>{maintain.description}</p1>
                <span className="price">${maintain.product_price}</span>
                <button
                  width="135px"
                  color="#F4FF77"
                  radius="50px"
                  class="btnitem"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>{" "}
        </li>
      );
    });

    return (
      <section>
        <h1>All Garden Maintenance</h1>
        <div className="gridcontainer">{maintenance}</div>
      </section>
    );
  }

  importimages(product_id) {
    if (product_id == 30) {
      return (
        <div className="Fertiliser">
          <Link to={`/product/${product_id}`}>
            <img
              src={Fertiliser}
              alt={Fertiliser}
              width="130px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id == 31) {
      return (
        <div className="Bucket">
          <Link to={`/product/${product_id}`}>
            <img
              src={Bucket}
              alt={Bucket}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    }
  }
}
