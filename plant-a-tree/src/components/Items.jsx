import React, { Component } from "react";

import cat from "../images/cat.jpeg";
////////////////////////////////////////////////////////////////////////////
import Shovel from "../images/shovel.jpeg";
import Rake from "../images/rake.jpeg";
import Hoe from "../images/hoe.jpeg";
import Cultivator from "../ToolImages/cultivator.jpg";
import Planter from "../ToolImages/planter-hoe.jpg";
import Tool_Belt from "../ToolImages/tool_belt.jpg";
import Transplanter from "../ToolImages/transplanter.jpg";
import Weeder from "../ToolImages/weeder.jpg";
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
import Organic_Fertilizer from "../GardenMainImages/organic_fertilizer.jpg";
import Organic_Potting_Mix from "../GardenMainImages/organic_potting_mix.jpg";
import Neem_Oil from "../GardenMainImages/Neem.jpg";
import Garden_Hose from "../GardenMainImages/garden_hose.jpg";
import Watering_Can from "../GardenMainImages/watering_can.jpg";
import Hose_Nozzle from "../GardenMainImages/hose_nozzle.jpg";
import Nematodes from "../GardenMainImages/nematodes.jpg";
import Self_Watering_Mix from "../GardenMainImages/self_watering_mix.jpg";
import Mix_Kit from "../GardenMainImages/mix_kit.jpg";
///////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

//import { fetchItems } from "./actions/itemsActions";
//import PropTypes from "prop-types";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsClone: []
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

      alert("please login to be able to add to cart");
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
                <h3>{item.latin_name}</h3>
                <br />
                <p2>type: {item.tree_type}</p2>
                <br />
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
              </div>
            </div>
          </div>{" "}
        </li>
      );
    });

    return (
      <div>
        <h2>Filter</h2>
        <div className="filternavbar">
          <div className="dropdown">
            <button className="dropbtn">Sort</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() => this.sortPrice(this.state.items, "lowhigh")}
              >
                Low to high
              </a>
              <a
                href="#"
                onClick={() => this.sortPrice(this.state.items, "highlow")}
              >
                High to low
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Tree Type</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Evergreen"
                  )
                }
              >
                Evergreen
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Fruit Tree"
                  )
                }
              >
                Fruit Tree
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "NZ Native"
                  )
                }
              >
                NZ Native
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Palm Tree"
                  )
                }
              >
                Palm Tree
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Hedge"
                  )
                }
              >
                Hedge
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Hardwood"
                  )
                }
              >
                Hardwood
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Deciduos"
                  )
                }
              >
                Deciduos
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Gum Tree"
                  )
                }
              >
                Gum Tree
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Garden maintenance requirement</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "High"
                  )
                }
              >
                High
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Medium"
                  )
                }
              >
                Medium
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Low"
                  )
                }
              >
                Low
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Growth Rate</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Fast"
                  )
                }
              >
                Fast
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Medium"
                  )
                }
              >
                Medium
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTree(
                    this.state.items,
                    this.state.itemsClone,
                    "Slow"
                  )
                }
              >
                Slow
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Sunlight Requirement</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSunlight(
                    this.state.items,
                    this.state.itemsClone,
                    "Sunny"
                  )
                }
              >
                Sunny
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSunlight(
                    this.state.items,
                    this.state.itemsClone,
                    "Medium"
                  )
                }
              >
                Medium
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSunlight(
                    this.state.items,
                    this.state.itemsClone,
                    "Low"
                  )
                }
              >
                Low
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSunlight(
                    this.state.items,
                    this.state.itemsClone,
                    "Shade"
                  )
                }
              >
                Shade
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Soil Drainage</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSoilDrainage(
                    this.state.items,
                    this.state.itemsClone,
                    "High"
                  )
                }
              >
                High
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSoilDrainage(
                    this.state.items,
                    this.state.itemsClone,
                    "Medium"
                  )
                }
              >
                Medium
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSoilDrainage(
                    this.state.items,
                    this.state.itemsClone,
                    "Low"
                  )
                }
              >
                Low
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeSoilDrainage(
                    this.state.items,
                    this.state.itemsClone,
                    "Shade"
                  )
                }
              >
                Shade
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Tree Ranges</button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() =>
                  this.filterTreeHeight(
                    this.state.items,
                    this.state.itemsClone,
                    "0-10"
                  )
                }
              >
                0-10
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeHeight(
                    this.state.items,
                    this.state.itemsClone,
                    "10-20"
                  )
                }
              >
                10-20
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeHeight(
                    this.state.items,
                    this.state.itemsClone,
                    "20-30"
                  )
                }
              >
                20-30
              </a>
              <a
                href="#"
                onClick={() =>
                  this.filterTreeHeight(
                    this.state.items,
                    this.state.itemsClone,
                    "30-50"
                  )
                }
              >
                30-50
              </a>
            </div>
          </div>
        </div>

        <br />
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
    } else if (product_id == 21) {
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
    } else if (product_id === 30) {
      return (
        <div className="Organic_Fertilizer">
          <Link to={`/product/${product_id}`}>
            <img
              src={Organic_Fertilizer}
              alt={cat}
              width="130px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 31) {
      return (
        <div className="Mix_Kit">
          <Link to={`/product/${product_id}`}>
            <img
              src={Mix_Kit}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 32) {
      return (
        <div className="Self_Watering_Mix">
          <Link to={`/product/${product_id}`}>
            <img
              src={Self_Watering_Mix}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 33) {
      return (
        <div className="Organic_Potting_Mix">
          <Link to={`/product/${product_id}`}>
            <img
              src={Organic_Potting_Mix}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 34) {
      return (
        <div className="Neem_Oil">
          <Link to={`/product/${product_id}`}>
            <img
              src={Neem_Oil}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 35) {
      return (
        <div className="Garden_Hose">
          <Link to={`/product/${product_id}`}>
            <img
              src={Garden_Hose}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 36) {
      return (
        <div className="Watering_Can">
          <Link to={`/product/${product_id}`}>
            <img
              src={Watering_Can}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 37) {
      return (
        <div className="Hose_Nozzle">
          <Link to={`/product/${product_id}`}>
            <img
              src={Hose_Nozzle}
              alt={cat}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 38) {
      return (
        <div className="Nematodes">
          <Link to={`/product/${product_id}`}>
            <img
              src={Nematodes}
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
)(Items);
