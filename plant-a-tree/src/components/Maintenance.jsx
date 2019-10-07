import React, { Component } from "react";

import { Link } from "react-router-dom";
import Fertiliser from "../images/fertiliser.jpg";
import Bucket from "../images/bucket.jpg";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { Prompt } from "react-router-dom";

class Maintenance extends Component {
  constructor() {
    super();
    this.state = {
      maintenance: [],
      shouldBlockNavigation: false
    };
    this.onclickproduct = this.onclickproduct.bind(this);
    this.importimages = this.importimages.bind(this);
  }
  handleClick = id => {
    if (
      localStorage.getItem("user") === "Not logged in" ||
      localStorage.getItem("user") === null
    ) {
      console.log("log in to continue");
      this.setState({ shouldBlockNavigation: true });
      window.history.back();
      window.location.href = "/login";
    } else {
      this.props.addToCart(id);
    }
  };

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
    localStorage.setItem("maintenanceID", resultID);
    console.log(localStorage.getItem("maintenanceID"));
  }
  render() {
    let { maintenance } = this.state;
    console.log(maintenance);
    maintenance = maintenance.map(maintain => {
      return (
        <li key={maintain.product_id} maintain={maintain} className="itemlist">
          <div wrap="true" className="itemwrap">
            <div className="itemimg">
              {this.importimages(maintain.product_id)}
            </div>
            <div className="item">
              <div className="itemdetails">
                <h2>{maintain.product_name}</h2>
                <p1>{maintain.description}</p1>
                <p1>{maintain.photo_link}</p1>
                <span className="price">${maintain.product_price}</span>
                <button
                  width="135px"
                  color="#F4FF77"
                  radius="50px"
                  class="btnitem"
                  onClick={() => this.handleClick(maintain.product_id)}
                >
                  Add To Cart
                </button>
                <Prompt
                  key="block-nav"
                  when={this.state.shouldBlockNavigation}
                  message="Please Login to add to cart"
                />
              </div>
            </div>
          </div>{" "}
        </li>
      );
    });

    return (
      <section>
        <div>
          <h3>Filter by price.</h3>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() => this.sortPrice(this.state.maintenance, "lowhigh")}
          >
            Sort from lowest to highest cost
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() => this.sortPrice(this.state.maintenance, "highlow")}
          >
            Sort from highest to lowest cost
          </button>
        </div>
        <h1>All Garden Maintenance</h1>
        <div className="gridcontainer">{maintenance}</div>
      </section>
    );
  }
  sortPrice(maintenancearray, condition) {
    if (condition === "lowhigh") {
      let a = maintenancearray.sort(function(a, b) {
        return parseFloat(a.product_price) - parseFloat(b.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ maintenance: a });
    } else if (condition === "highlow") {
      let a = maintenancearray.sort(function(a, b) {
        return parseFloat(b.product_price) - parseFloat(a.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ maintenance: a });
    }
  }

  importimages(product_id) {
    if (product_id === 30) {
      return (
        <div className="Fertiliser">
          <Link to={`/product/${product_id}`}>
            <img
              src={Fertiliser}
              alt={Fertiliser}
              width="130px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 31) {
      return (
        <div className="Bucket">
          <Link to={`/product/${product_id}`}>
            <img
              src={Bucket}
              alt={Bucket}
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
)(Maintenance);
