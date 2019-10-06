import React, { Component } from "react";

import { Link } from "react-router-dom";
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
import cat from "../images/cat.jpeg";

export default class Trees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: [],
      treesClone: []
    };
    this.onclickproduct = this.onclickproduct.bind(this);
    this.importimages = this.importimages.bind(this);
    this.sortPrice = this.sortPrice.bind(this);
    this.filterTree = this.filterTree.bind(this);
    this.filterTreeSunlight = this.filterTreeSunlight.bind(this);
    this.filterTreeSoilDrainage = this.filterTreeSoilDrainage.bind(this);
    this.getTrees = this.getTrees.bind(this);
  }

  componentDidMount() {
    this.getTrees();
    this.getTreesClone();
  }

  getTrees = _ => {
    fetch("/trees")
      .then(response => response.json())
      .then(response => this.setState({ trees: response.data }))
      .catch(err => console.error(err));
  };

  getTreesClone = _ => {
    fetch("/trees")
      .then(response => response.json())
      .then(response => this.setState({ treesClone: response.data }))
      .catch(err => console.error(err));
  };
  onclickproduct(product_id) {
    var resultID = product_id - 1;
    localStorage.setItem("treeID", resultID);
    console.log(localStorage.getItem("treeID"));
  }

  render() {
    let { trees } = this.state;

    trees = trees.map(tree => {
      return (
        <li key={tree.product_id} tree={tree}>
          <div wrap="true" className="itemwrap">
            <div className="itemimg">{this.importimages(tree.product_id)}</div>
            <div className="item">
              <div className="itemdetails">
                <p1>{tree.product_name}</p1>
                <br></br>
                <p1>{tree.latin_name}</p1>
                <br />
                <p2>type: {tree.tree_type}</p2>
                <p1>maintenaince: {tree.maintenaince}</p1>
                <br />
                <p1>sunlight: {tree.sunlight}</p1>
                <br />
                <p1>height: {tree.height}</p1>
                <br />
                <p1>soil: {tree.soil_drainage}</p1>
                <br />
                <p1>gr: {tree.growth_rate}</p1>
                <br />
                <span className="price">${tree.product_price}</span>
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
      <div>
        <div>
          <h3>Filter by price.</h3>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() => this.sortPrice(this.state.trees, "lowhigh")}
          >
            Sort from lowest to highest cost
          </button>
          <button
            width="135px"
            color="#F4FF77"
            radius="50px"
            class="btnitem"
            onClick={() => this.sortPrice(this.state.trees, "highlow")}
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
              this.filterTree(this.state.trees, this.state.treesClone, "Hedge")
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
              this.filterTree(this.state.trees, this.state.treesClone, "High")
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
              this.filterTree(this.state.trees, this.state.treesClone, "Medium")
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
              this.filterTree(this.state.trees, this.state.treesClone, "Low")
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
              this.filterTree(this.state.trees, this.state.treesClone, "Fast")
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
              this.filterTree(this.state.trees, this.state.treesClone, "Medium")
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
              this.filterTree(this.state.trees, this.state.treesClone, "Slow")
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
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
                this.state.trees,
                this.state.treesClone,
                "30-50"
              )
            }
          >
            30-50
          </button>
        </div>
        <h1>All Trees and Hedges</h1>
        <div className="gridcontainer">{trees}</div>
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
      this.setState({ trees: a });
    } else if (condition === "10-20") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return (
          tree.height.slice(0, tree.height.length - 1) <= 20 &&
          tree.height.slice(0, tree.height.length - 1) >= 10
        );
      });
      this.setState({ trees: a });
    } else if (condition === "20-30") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return (
          tree.height.slice(0, tree.height.length - 1) <= 30 &&
          tree.height.slice(0, tree.height.length - 1) >= 20
        );
      });
      this.setState({ trees: a });
    } else if (condition === "30-50") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return (
          tree.height.slice(0, tree.height.length - 1) <= 50 &&
          tree.height.slice(0, tree.height.length - 1) >= 30
        );
      });
      this.setState({ trees: a });
    }
  }

  filterTreeSoilDrainage(treearray, treeclonearray, condition) {
    if (condition === "High") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Low") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Shade") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.soil_drainage.includes(condition);
      });
      this.setState({ trees: a });
    }
  }
  filterTreeSunlight(treearray, treeclonearray, condition) {
    if (condition === "Sunny") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Low") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Shade") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.sunlight.includes(condition);
      });
      this.setState({ trees: a });
    }
  }
  filterTree(treearray, treeclonearray, condition) {
    //this method is for tree type,growth rate and tree maintenance.
    if (condition === "Evergreen") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Fruit Tree") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "NZ Native") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Palm Tree") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Hedge") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Hardwood") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Deciduos") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Gum Tree") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.tree_type.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "High") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.maintenaince.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.maintenaince.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Low") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.maintenaince.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Fast") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.growth_rate.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Medium") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.growth_rate.includes(condition);
      });
      this.setState({ trees: a });
    } else if (condition === "Slow") {
      treearray = treeclonearray;
      let a = treearray.filter(function(tree) {
        return tree.growth_rate.includes(condition);
      });
      this.setState({ trees: a });
    }
  }

  sortPrice(treearray, condition) {
    if (condition === "lowhigh") {
      let a = treearray.sort(function(a, b) {
        return parseFloat(a.product_price) - parseFloat(b.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ trees: a });
    } else if (condition === "highlow") {
      let a = treearray.sort(function(a, b) {
        return parseFloat(b.product_price) - parseFloat(a.product_price);
      });
      console.log("After sort ");
      console.log(a);
      this.setState({ trees: a });
    }
  }

  importimages(product_id) {
    if (product_id === 1) {
      return (
        <div className="kauri">
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
            <img
              src={Pohu}
              alt={cat}
              width="350px"
              height="300px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>{" "}
          </Link>
        </div>
      );
    } else if (product_id === 3) {
      return (
        <div className="kowhai">
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
          <Link to={`/product/${product_id}`}>
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
  }
}
//milestone reached.
