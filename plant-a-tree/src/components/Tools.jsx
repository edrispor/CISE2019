import React, { Component } from "react";
import Shovel from "../images/shovel.jpeg";
import Rake from "../images/rake.jpeg";
import Hoe from "../images/hoe.jpeg";
import Cultivator from "../ToolImages/cultivator.jpg";
import Planter from "../ToolImages/planter-hoe.jpg";
import Tool_Belt from "../ToolImages/tool_belt.jpg";
import Transplanter from "../ToolImages/transplanter.jpg";
import Weeder from "../ToolImages/weeder.jpg";
import cat from "../images/cat.jpeg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: []
    };
    this.importimages = this.importimages.bind(this);
    this.onclickproduct = this.onclickproduct.bind(this);
  }

  handleClick = id => {
    if (
      localStorage.getItem("user") === "Not logged in" ||
      localStorage.getItem("user") === null
    ) {
      console.log("log in to continue");

      alert("please login to be able to add to cart");
    } else {
      this.props.addToCart(id);
    }
  };

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
    localStorage.setItem("toolID", resultID);
    console.log(localStorage.getItem("toolID"));
  }

  render() {
    let { tools } = this.state;
    console.log(tools);
    tools = tools.map(tool => {
      return (
        <li key={tool.product_id} tool={tool} className="itemlist">
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
                  onClick={() => this.handleClick(tool.product_id)}
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
      <div>
        <div className="filternavbar">
          <div className="dropdown">
            <button className="dropbtn">Sort</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() => this.sortPrice(this.state.tools, "lowhigh")}
              >
                Low to high
              </a>
              <a
                href="#"
                onClick={() => this.sortPrice(this.state.tools, "highlow")}
              >
                High to low
              </a>
            </div>
          </div>
        </div>
        <h1>All Tools</h1>
        <div className="gridcontainer">{tools}</div>
      </div>
    );
  }
  sortPrice(toolsarray, condition) {
    if (condition === "lowhigh") {
      let a = toolsarray.sort(function(a, b) {
        return parseFloat(a.product_price) - parseFloat(b.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ tools: a });
    } else if (condition === "highlow") {
      let a = toolsarray.sort(function(a, b) {
        return parseFloat(b.product_price) - parseFloat(a.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ tools: a });
    }
  }
  importimages(product_id) {
    if (product_id === 21) {
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
    } else if (product_id === 22) {
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
    } else if (product_id === 23) {
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
    } else if (product_id === 24) {
      return (
        <div classname="Cultivator">
          <Link to={`/product/${product_id}`}>
            <img
              src={Cultivator}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 25) {
      return (
        <div classname="Transplanter">
          <Link to={`/product/${product_id}`}>
            <img
              src={Transplanter}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 26) {
      return (
        <div classname="Planter">
          <Link to={`/product/${product_id}`}>
            <img
              src={Planter}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 27) {
      return (
        <div classname="Weeder">
          <Link to={`/product/${product_id}`}>
            <img
              src={Weeder}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 28) {
      return (
        <div classname="Tool_Belt">
          <Link to={`/product/${product_id}`}>
            <img
              src={Tool_Belt}
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
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

/*Items.propTypes = {
  fetchItems: PropTypes.func.isRequired
};*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);
