import React, { Component } from "react";

export default class Trees extends Component {
  constructor() {
    super();
    this.state = {
      trees: []
    };
  }

  componentDidMount() {
    this.getTrees();
  }

  getTree = _ => {
    fetch("/trees")
      .then(response => response.json())
      .then(response => this.setState({ trees: response.data }))
      .catch(err => console.error(err));
  };

  renderTrees = ({ product_id, product_name, product_price }) => (
    <div key={product_id}>
      {product_id} : {product_name} : {product_price}
    </div>
  );
  render() {
    const { trees } = this.state;
    return <div>{trees.map(this.renderTrees)}</div>;
  }
}
