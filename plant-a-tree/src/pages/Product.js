import React, { Component } from "react";
import Shovel from "../images/shovel.jpeg";
import Rake from "../images/rake.jpeg";
import Hoe from "../images/hoe.jpeg";
import cat from "../images/cat.jpeg";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: []
    };
  }

  componentDidMount() {
    this.getTools();
  }
  getimage(id) {
    if (id === 21) {
      return (
        <div className="shovel">
          <img src={Shovel} alt={cat} width="200px" height="150px"></img>
        </div>
      );
    }
  }
  getTools = _ => {
    fetch("/tools")
      .then(response => response.json())
      .then(response => this.setState({ tools: response.data }))
      .catch(err => console.error(err));
  };
  render() {
    const { tools } = this.state;

    const listItems = tools.map(d => (
      <li key={d.product_id}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>this is image {this.getimage(d.product_id)}</div>
        <p>name : {d.product_name}</p>
        <p>description "{d.description}</p>
      </li>
    ));
    return <div>{listItems[localStorage.getItem("productID")]}</div>;
  }
}
