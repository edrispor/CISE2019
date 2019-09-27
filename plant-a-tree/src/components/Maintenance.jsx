import React, { Component } from "react";
import Maintenancedisplay from "./Maintenancedisplay";
export default class Maintenance extends Component {
  constructor() {
    super();
    this.state = {
      maintenance: []
    };
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
