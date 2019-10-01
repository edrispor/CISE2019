import React, { Component } from "react";
import Shovel from "../images/shovel.jpeg";
import Rake from "../images/rake.jpeg";
import Hoe from "../images/hoe.jpeg";
import cat from "../images/cat.jpeg";
import { Link } from "react-router-dom";

export default class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: []
    };
    this.importimages = this.importimages.bind(this);
    this.onclickproduct = this.onclickproduct.bind(this);
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

  onclickproduct(product_id) {
    var resultID = this.state.tools.findIndex(
      entry => entry.product_id === product_id
    );
    localStorage.setItem("productID", resultID);
    console.log(localStorage.getItem("productID"));
  }
  importimages(product_id) {
    if (product_id == 21) {
      console.log(product_id);

      return (
        <div className="shovel">
          <Link to={`/product/${product_id}`}>
            <img
              src={Shovel}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>
          </Link>
        </div>
      );
    } else if (product_id == 22) {
      return (
        <div classname="Rake">
          <Link to={`/product/${product_id}`}>
            <img
              src={Rake}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id == 23) {
      return (
        <div classname="Hoe">
          <Link to={`/product/${product_id}`}>
            <img
              src={Hoe}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    }
  }

  render() {
    let { tools } = this.state;
    console.log(tools);
    tools = tools.map(tool => {
      return (
        <li key={tool.product_id} tool={tool}>
          <div wrap="true" className="itemwrap">
            {this.importimages(tool.product_id)}

            <div className="item">
              <div className="itemdetails">
                <h2>{tool.product_name}</h2>
                <p1>{tool.description}</p1>
                <span className="price">${tool.product_price}</span>
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
          </div>
        </li>
      );
    });

    return (
      <dix>
        <h1>All Tools</h1>
        <div className="gridcontainer">{tools}</div>
      </dix>
    );
  }
}
