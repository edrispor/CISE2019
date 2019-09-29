import React, { Component } from "react";
import Itemsdisplay from "./Itemsdisplay";
export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = _ => {
    fetch("/items")
      .then(response => response.json())
      .then(response => this.setState({ items: response.data }))
      .catch(err => console.error(err));
  };

  render() {
    let { items } = this.state;
    console.log("this is all items");
    console.log(items);
    items = items.map(item => {
      return <Itemsdisplay key={item.product_id} item={item}></Itemsdisplay>;
    });

    return (
      <section>
        <h1>Featured Items</h1>
        <div>{items}</div>
      </section>
    );
  }
}
