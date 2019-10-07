import React, { Component } from "react";
import cat from "../images/cat.jpeg";
import { Link } from "react-router-dom";
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
export default class Product_All extends Component {
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
    const { items } = this.state;

    const listAll = items.map(item => (
      <li key={item.product_id} className="itemlist">
        <div className="pagelayout">
          <Link to="/">Home </Link>
          <Link to="/items">> All Products</Link>
          <p>> {item.product_name}</p>
          <div className="specific-tree-page">
            <div align="center">{this.getimage(item.product_id)}</div>
            <div className="itemdetails">
              <h1>{item.product_name}</h1>
              <p>{item.description}</p>
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
    ));

    return <div>{listAll[localStorage.getItem("allID")]}</div>;
  }

  getimage(product_id) {
    if (product_id === 1) {
      return (
        <div className="kauri">
          <div className="itemdetails">
            <img src={Kauri} alt={cat} width="280px" height="480px"></img>
          </div>
        </div>
      );
    } else if (product_id === 2) {
      return (
        <div className="pohutakawa">
          <div className="itemdetails">
            <img src={Pohu} alt={cat} width="350px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 3) {
      return (
        <div className="kowhai">
          <div className="itemdetails">
            <img src={Kowhai} alt={Kowhai} width="350px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 4) {
      return (
        <div className="CabbageTree">
          <div className="itemdetails">
            <img
              src={CabbageTree}
              alt={CabbageTree}
              width="350px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 5) {
      return (
        <div className="Apple">
          <div className="itemdetails">
            <img src={Apple} alt={Apple} width="250px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 6) {
      return (
        <div className="Feijoa">
          <div className="itemdetails">
            <img src={Feijoa} alt={Feijoa} width="350px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 7) {
      return (
        <div className="Lemon">
          <div className="itemdetails">
            <img src={Lemon} alt={Lemon} width="300px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 8) {
      return (
        <div className="Olive">
          <div className="itemdetails">
            <img src={Olive} alt={Olive} width="250px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 9) {
      return (
        <div className="BabyBlue">
          <div className="itemdetails">
            <img
              src={BabyBlue}
              alt={BabyBlue}
              width="330px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 10) {
      return (
        <div className="SwampP">
          <div className="itemdetails">
            <img src={SwampP} alt={SwampP} width="350px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 11) {
      return (
        <div className="MannaGum">
          <div className="itemdetails">
            <img
              src={MannaGum}
              alt={MannaGum}
              width="350px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 12) {
      return (
        <div className="RedStringy">
          <div className="itemdetails">
            <img
              src={RedStringy}
              alt={RedStringy}
              width="350px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 13) {
      return (
        <div className="UmbrellaPalm">
          <div className="itemdetails">
            <img
              src={UmbrellaPalm}
              alt={UmbrellaPalm}
              width="300px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 14) {
      return (
        <div className="PittINikau">
          <div className="itemdetails">
            <img
              src={PittINikau}
              alt={PittINikau}
              width="330px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 15) {
      return (
        <div className="Bamboo">
          <div className="itemdetails">
            <img src={Bamboo} alt={Bamboo} width="350px" height="300px"></img>{" "}
          </div>
        </div>
      );
    } else if (product_id === 16) {
      return (
        <div className="PortLaurel">
          <div className="itemdetails">
            <img
              src={PortLaurel}
              alt={PortLaurel}
              width="350px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 17) {
      return (
        <div className="Olearia">
          <div className="itemdetails">
            <img src={Olearia} alt={Olearia} width="350px" height="300px"></img>
          </div>
        </div>
      );
    } else if (product_id === 18) {
      return (
        <div className="SilverBirch">
          <div className="itemdetails">
            <img
              src={SilverBirch}
              alt={SilverBirch}
              width="350px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 19) {
      return (
        <div className="MtFujiCherry">
          <div className="itemdetails">
            <img
              src={MtFujiCherry}
              alt={MtFujiCherry}
              width="300px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 20) {
      return (
        <div className="EnglishOak">
          <div className="itemdetails">
            <img
              src={EnglishOak}
              alt={EnglishOak}
              width="350px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    }
    if (product_id === 21) {
      return (
        <div className="shovel">
          <div className="itemdetails">
            <img src={Shovel} alt={cat} width="200px" height="150px"></img>
          </div>
        </div>
      );
    } else if (product_id === 22) {
      return (
        <div className="Rake">
          <div className="itemdetails">
            <img src={Rake} alt={cat} width="200px" height="150px"></img>
          </div>
        </div>
      );
    } else if (product_id === 23) {
      return (
        <div className="Hoe">
          <div className="itemdetails">
            <img src={Hoe} alt={cat} width="200px" height="150px"></img>
          </div>
        </div>
      );
    }
    if (product_id === 30) {
      return (
        <div className="Fertiliser">
          <div className="itemdetails">
            <img
              src={Fertiliser}
              alt={Fertiliser}
              width="130px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>
          </div>
        </div>
      );
    } else if (product_id === 31) {
      return (
        <div className="Bucket">
          <div className="itemdetails">
            <img
              src={Bucket}
              alt={Bucket}
              width="200px"
              height="150px"
              onClick={() => this.onclickproduct(product_id)}
            ></img>
          </div>
        </div>
      );
    }
  }
}
