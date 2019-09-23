import React, { Component } from "react";

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

  renderMaintenance = ({ product_id, product_name, product_price }) => (
    <div key={product_id}>
      {product_id} : {product_name} : {product_price}
    </div>
  );
  render() {
    const { maintenance } = this.state;
    return <div>{maintenance.map(this.renderMaintenance)}</div>;
  }
}
