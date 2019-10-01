import React, { Component } from "react";
import Itemsdisplay from "./Itemsdisplay";
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
export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.onclickproduct = this.onclickproduct.bind(this);
    this.importimages = this.importimages.bind(this);
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
  onclickproduct(product_id) {
    var resultID = this.state.items.findIndex(
      entry => entry.product_id === product_id
    );
    localStorage.setItem("allID", resultID);
    console.log(localStorage.getItem("allID"));
  }

  render() {
    let { items } = this.state;
    console.log("this is all items");
    console.log(items);
    items = items.map(item => {
      return (
        <li key={item.product_id} item={item}>
          <div wrap="true" className="itemwrap">
            <div className="itemimg">{this.importimages(item.product_id)}</div>
            <div className="item">
              <div className="itemdetails">
                <h2>{item.product_name}</h2>
                <p1>Click to find out more.</p1>
                <span className="price">${item.product_price}</span>
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
          </div>{" "}
        </li>
      );
    });

    return (
      <section>
        <h1>Featured Items</h1>
        <div>{items}</div>
      </section>
    );
  }
  importimages(product_id) {
    if (product_id == 1) {
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
    } else if (product_id == 2) {
      return (
        <div className="pohutakawa">
          <Link to={`/productall/${product_id}`}>
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
    } else if (product_id == 3) {
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
    } else if (product_id == 4) {
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
    } else if (product_id == 5) {
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
    } else if (product_id == 6) {
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
    } else if (product_id == 7) {
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
    } else if (product_id == 8) {
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
    } else if (product_id == 9) {
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
    } else if (product_id == 10) {
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
    } else if (product_id == 11) {
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
    } else if (product_id == 12) {
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
    } else if (product_id == 13) {
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
    } else if (product_id == 14) {
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
    } else if (product_id == 15) {
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
    } else if (product_id == 16) {
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
    } else if (product_id == 17) {
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
    } else if (product_id == 18) {
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
    } else if (product_id == 19) {
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
    } else if (product_id == 20) {
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
    if (product_id == 21) {
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
    } else if (product_id == 22) {
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
    } else if (product_id == 23) {
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
    if (product_id == 30) {
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
    } else if (product_id == 31) {
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
