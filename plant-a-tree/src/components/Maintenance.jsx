import React, { Component } from "react";
import Maintenancedisplay from "./Maintenancedisplay";
import { Link } from "react-router-dom";
import Fertiliser from "../images/fertiliser.jpg";
import Bucket from "../images/bucket.jpg";
export default class Maintenance extends Component {
  constructor() {
    super();
    this.state = {
      maintenance: []
    };
    this.onclickproduct = this.onclickproduct.bind(this);
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
    localStorage.setItem("productID", resultID);
    console.log(localStorage.getItem("productID"));
  }
  render() {
    let { maintenance } = this.state;
    console.log(maintenance);
    maintenance = maintenance.map(maintain => {
      return (
        <Maintenancedisplay
          key={maintain.product_id}
          maintain={maintain}
        ></Maintenancedisplay>
      );
    });

    return (
      <section>
        <h1>All Garden Maintenance</h1>
        <div className="gridcontainer">{maintenance}</div>
      </section>
    );
  }
}
