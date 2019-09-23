import React, { Component } from "react";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = _ => {
    fetch("/products")
      .then(response => response.json())
      .then(response => this.setState({ products: response.data }))
      .catch(err => console.error(err));
  };

  renderProduct = ({ product_id, product_name, product_price }) => (
    <div key={product_id}>
      {product_id} : {product_name} : {product_price}
    </div>
  );
  render() {
    const { products } = this.state;
    return <div>{products.map(this.renderProduct)}</div>;
  }
}
