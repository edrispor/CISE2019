import React, { Component } from "react";

export default class Tools extends Component {
  constructor() {
    super();
    this.state = {
      tools: []
    };
  }

  componentDidMount() {
    this.getTools();
  }

  getTools = _ => {
    fetch("/tools")
      .then(response => response.json())
      .then(response => this.setState({ tools: response.data }))
      .catch(err => console.error(err));
  };

  renderTools = ({ product_id, product_name, product_price }) => (
    <div key={product_id}>
      {product_id} : {product_name} : {product_price}
    </div>
  );
  render() {
    const { tools } = this.state;
    return <div>{tools.map(this.renderTools)}</div>;
  }
}
