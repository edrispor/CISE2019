import React, { Component } from "react";

import cat from "../images/cat.jpeg";
////////////////////////////////////////////////////////////////////////////
import Shovel from "../images/shovel.jpeg";
import Rake from "../images/rake.jpeg";
import Hoe from "../images/hoe.jpeg";
////////////////////////////////////////////////////////////////////////////
import Kauri from "../TreeImages/Kauri-1.jpg";
import Pohu from "../TreeImages/Pohutakawa-1.jpg";
import Kowhai from "../TreeImages/kowhai.jpg";
import CabbageTree from "../TreeImages/cabbagetree.jpg";
import Apple from "../TreeImages/Apple-1.jpg";
import Feijoa from "../TreeImages/Feijoa-1.jpg";
import Lemon from "../TreeImages/lemon.jpg";
import Olive from "../TreeImages/olive.jpg";
import BabyBlue from "../TreeImages/babyblue.jpg";
import SwampP from "../TreeImages/swamppeppermint.jpg";
import MannaGum from "../TreeImages/mannagum.jpg";
import RedStringy from "../TreeImages/redstringy.jpg";
import UmbrellaPalm from "../TreeImages/umbrellapalm.jpg";
import PittINikau from "../TreeImages/pittislandnikau.jpg";
import Bamboo from "../TreeImages/bamboo.jpg";
import PortLaurel from "../TreeImages/portugueselaurel.jpg";
import Olearia from "../TreeImages/olearia.jpg";
import SilverBirch from "../TreeImages/silverbirch.jpg";
import MtFujiCherry from "../TreeImages/mtfuji.jpg";
import EnglishOak from "../TreeImages/englishoak.jpg";
///////////////////////////////////////////////////////////////////
import Fertiliser from "../images/fertiliser.jpg";
import Bucket from "../images/bucket.jpg";
///////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { Prompt } from "react-router-dom";
//import { fetchItems } from "./actions/itemsActions";
//import PropTypes from "prop-types";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsClone: [],
      shouldBlockNavigation: false
    };
    this.onclickproduct = this.onclickproduct.bind(this);
    this.importimages = this.importimages.bind(this);
    this.sortPrice = this.sortPrice.bind(this);
    this.filterTree = this.filterTree.bind(this);
    this.filterTreeSunlight = this.filterTreeSunlight.bind(this);
    this.filterTreeSoilDrainage = this.filterTreeSoilDrainage.bind(this);
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
    this.getItems();
    this.getItemsClone();
  }

  getItems = _ => {
    fetch("/items")
      .then(response => response.json())
      .then(response => this.setState({ items: response.data }))
      .catch(err => console.error(err));
  };
  getItemsClone = _ => {
    fetch("/items")
      .then(response => response.json())
      .then(response => this.setState({ itemsClone: response.data }))
      .catch(err => console.error(err));
  };
  onclickproduct(product_id) {
    /*var resultID = this.state.items.findIndex(
      entry => entry.product_id === product_id
    );*/
    var resultID = product_id - 1;
    localStorage.setItem("allID", resultID);
    //console.log(this.props.allItems.items);
    console.log(localStorage.getItem("allID"));
  }

  sortPrice(itemarray, condition) {
    if (condition === "lowhigh") {
      let a = itemarray.sort(function(a, b) {
        return parseFloat(a.product_price) - parseFloat(b.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ items: a });
    } else if (condition === "highlow") {
      let a = itemarray.sort(function(a, b) {
        return parseFloat(b.product_price) - parseFloat(a.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ items: a });
    }
  }

  render() {
    let { items } = this.state;
    console.log("this is all items");
    console.log(items);
    items = items.map(item => {
      return (
        <li key={item.product_id} item={item} className="itemlist">
          <div wrap="true" className="itemwrap">
            <div className="itemimg">{this.importimages(item.product_id)}</div>
            <div className="item">
              <div className="itemdetails">
                <h2>{item.product_name}</h2>
                <br></br>
                <p1>{item.latin_name}</p1>
                <br />
                <p2>type: {item.tree_type}</p2>
                <p1>maintenaince: {item.maintenaince}</p1>
                <br />
                <p1>sunlight: {item.sunlight}</p1>
                <br />
                <p1>height: {item.height}</p1>
                <br />
                <p1>soil: {item.soil_drainage}</p1>
                <br />
                <p1>gr: {item.growth_rate}</p1>
                <br />

                <p1>Click to find out more.</p1>
                <span className="price">${item.product_price}</span>
                <button
                  width="135px"
                  color="#F4FF77"
                  radius="50px"
                  class="btnitem"
                  onClick={() => this.handleClick(item.product_id)}
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
      <div>
        <h1>Featured Items</h1>
        <div>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() => this.sortPrice(this.state.items, "lowhigh")}
          >
            Sort from lowest to highest cost
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() => this.sortPrice(this.state.items, "highlow")}
          >
            Sort from highest to lowest cost
          </button>
        </div>
        <div>
          <h3>Tree type filter</h3>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(
                this.state.items,
                this.state.itemsClone,
                "Evergreen"
              )
            }
          >
            Evergreen
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(
                this.state.items,
                this.state.itemsClone,
                "Fruit Tree"
              )
            }
          >
            Fruit Tree
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(
                this.state.items,
                this.state.itemsClone,
                "NZ Native"
              )
            }
          >
            NZ Native
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(
                this.state.items,
                this.state.itemsClone,
                "Palm Tree"
              )
            }
          >
            Palm Tree
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(this.state.items, this.state.itemsClone, "Hedge")
            }
          >
            Hedge
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(
                this.state.items,
                this.state.itemsClone,
                "Hardwood"
              )
            }
          >
            Hardwood
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(
                this.state.items,
                this.state.itemsClone,
                "Deciduos"
              )
            }
          >
            Deciduos
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(
                this.state.items,
                this.state.itemsClone,
                "Gum Tree"
              )
            }
          >
            Gum Tree
          </button>
        </div>
        <div>
          <h3>Garden maintenance requirement</h3>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(this.state.items, this.state.itemsClone, "High")
            }
          >
            High
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(this.state.items, this.state.itemsClone, "Medium")
            }
          >
            Medium
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(this.state.items, this.state.itemsClone, "Low")
            }
          >
            Low
          </button>
        </div>
        <div>
          <h3>Growth Rate</h3>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(this.state.items, this.state.itemsClone, "Fast")
            }
          >
            Fast
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(this.state.items, this.state.itemsClone, "Medium")
            }
          >
            Medium
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTree(this.state.items, this.state.itemsClone, "Slow")
            }
          >
            Slow
          </button>
        </div>
        <div>
          <h3>Sunlight Requirement</h3>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSunlight(
                this.state.items,
                this.state.itemsClone,
                "Sunny"
              )
            }
          >
            Sunny
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSunlight(
                this.state.items,
                this.state.itemsClone,
                "Medium"
              )
            }
          >
            Medium
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSunlight(
                this.state.items,
                this.state.itemsClone,
                "Low"
              )
            }
          >
            Low
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSunlight(
                this.state.items,
                this.state.itemsClone,
                "Shade"
              )
            }
          >
            Shade
          </button>
        </div>
        <div>
          <h3>Soil Drainage</h3>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSoilDrainage(
                this.state.items,
                this.state.itemsClone,
                "High"
              )
            }
          >
            High
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSoilDrainage(
                this.state.items,
                this.state.itemsClone,
                "Medium"
              )
            }
          >
            Medium
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSoilDrainage(
                this.state.items,
                this.state.itemsClone,
                "Low"
              )
            }
          >
            Low
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeSoilDrainage(
                this.state.items,
                this.state.itemsClone,
                "Shade"
              )
            }
          >
            Shade
          </button>
        </div>
        <div>
          <h3>Tree Ranges</h3>{" "}
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeHeight(
                this.state.items,
                this.state.itemsClone,
                "0-10"
              )
            }
          >
            0-10
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeHeight(
                this.state.items,
                this.state.itemsClone,
                "10-20"
              )
            }
          >
            10-20
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeHeight(
                this.state.items,
                this.state.itemsClone,
                "20-30"
              )
            }
          >
            20-30
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() =>
              this.filterTreeHeight(
                this.state.items,
                this.state.itemsClone,
                "30-50"
              )
            }
          >
            30-50
          </button>
        </div>
        <div>{items}</div>
      </div>
    );
  }

  filterTreeHeight(treearray, treeclonearray, condition) {
    if (condition === "0-10") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return (
          tree.height.slice(0, tree.height.length - 1) <= 10 &&
          tree.height.slice(0, tree.height.length - 1) >= 0
        );
      });
      this.setState({ items: a });
    } else if (condition === "10-20") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return (
          tree.height.slice(0, tree.height.length - 1) <= 20 &&
          tree.height.slice(0, tree.height.length - 1) >= 10
        );
      });
      this.setState({ items: a });
    } else if (condition === "20-30") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return (
          tree.height.slice(0, tree.height.length - 1) <= 30 &&
          tree.height.slice(0, tree.height.length - 1) >= 20
        );
      });
      this.setState({ items: a });
    } else if (condition === "30-50") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return (
          tree.height.slice(0, tree.height.length - 1) <= 50 &&
          tree.height.slice(0, tree.height.length - 1) >= 30
        );
      });
      this.setState({ items: a });
    }
  }

  filterTreeSoilDrainage(treearray, treeclonearray, condition) {
    if (condition === "High") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Low") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Shade") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ items: a });
    }
  }
  filterTreeSunlight(treearray, treeclonearray, condition) {
    if (condition === "Sunny") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Low") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Shade") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ items: a });
    }
  }
  filterTree(treearray, treeclonearray, condition) {
    //this method is for tree type,growth rate and tree maintenance.
    if (condition === "Evergreen") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Fruit Tree") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "NZ Native") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Palm Tree") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Hedge") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Hardwood") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Deciduos") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Gum Tree") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "High") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.maintenaince.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.maintenaince.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Low") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.maintenaince.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Fast") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.growth_rate.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.growth_rate.includes(condition);
      });
      this.setState({ items: a });
    } else if (condition === "Slow") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.growth_rate.includes(condition);
      });
      this.setState({ items: a });
    }
  }

  importimages(product_id) {
    if (product_id === 1) {
      return (
        <div className="kauri">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Kauri}
              alt={cat}
              width="250px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 2) {
      return (
        <div className="pohutakawa">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Pohu}
              alt={cat}
              width="310px"
              height="260px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 3) {
      return (
        <div className="kowhai">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Kowhai}
              alt={Kowhai}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 4) {
      return (
        <div className="CabbageTree">
          <Link to={`/productall/${product_id}`}>
            <img
              src={CabbageTree}
              alt={CabbageTree}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 5) {
      return (
        <div className="Apple">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Apple}
              alt={Apple}
              width="250px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 6) {
      return (
        <div className="Feijoa">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Feijoa}
              alt={Feijoa}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 7) {
      return (
        <div className="Lemon">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Lemon}
              alt={Lemon}
              width="300px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 8) {
      return (
        <div className="Olive">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Olive}
              alt={Olive}
              width="250px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 9) {
      return (
        <div className="BabyBlue">
          <Link to={`/productall/${product_id}`}>
            <img
              src={BabyBlue}
              alt={BabyBlue}
              width="330px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 10) {
      return (
        <div className="SwampP">
          <Link to={`/productall/${product_id}`}>
            <img
              src={SwampP}
              alt={SwampP}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 11) {
      return (
        <div className="MannaGum">
          <Link to={`/productall/${product_id}`}>
            <img
              src={MannaGum}
              alt={MannaGum}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 12) {
      return (
        <div className="RedStringy">
          <Link to={`/productall/${product_id}`}>
            <img
              src={RedStringy}
              alt={RedStringy}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 13) {
      return (
        <div className="UmbrellaPalm">
          <Link to={`/productall/${product_id}`}>
            <img
              src={UmbrellaPalm}
              alt={UmbrellaPalm}
              width="300px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 14) {
      return (
        <div className="PittINikau">
          <Link to={`/productall/${product_id}`}>
            <img
              src={PittINikau}
              alt={PittINikau}
              width="330px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 15) {
      return (
        <div className="Bamboo">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Bamboo}
              alt={Bamboo}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 16) {
      return (
        <div className="PortLaurel">
          <Link to={`/productall/${product_id}`}>
            <img
              src={PortLaurel}
              alt={PortLaurel}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 17) {
      return (
        <div className="Olearia">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Olearia}
              alt={Olearia}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 18) {
      return (
        <div className="SilverBirch">
          <Link to={`/productall/${product_id}`}>
            <img
              src={SilverBirch}
              alt={SilverBirch}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 19) {
      return (
        <div className="MtFujiCherry">
          <Link to={`/productall/${product_id}`}>
            <img
              src={MtFujiCherry}
              alt={MtFujiCherry}
              width="300px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 20) {
      return (
        <div className="EnglishOak">
          <Link to={`/productall/${product_id}`}>
            <img
              src={EnglishOak}
              alt={EnglishOak}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    }
    if (product_id === 21) {
      return (
        <div className="shovel">
          <Link to={`/productall/${product_id}`}>
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
        <div className="Rake">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Rake}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>
          </Link>
        </div>
      );
    } else if (product_id === 23) {
      return (
        <div className="Hoe">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Hoe}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>
          </Link>
        </div>
      );
    }
    if (product_id === 30) {
      return (
        <div className="Fertiliser">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Fertiliser}
              alt={Fertiliser}
              width="130px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 31) {
      return (
        <div className="Bucket">
          <Link to={`/productall/${product_id}`}>
            <img
              src={Bucket}
              alt={Bucket}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
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
)(Items);
