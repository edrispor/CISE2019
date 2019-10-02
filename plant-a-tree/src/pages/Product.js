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
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
      trees: [],
      maintenance: [],
      items: []
    };
  }

  componentDidMount() {
    this.getTools();
    this.getTrees();
    this.getMaintenance();
    this.getItems();
  }

  getTools = _ => {
    fetch("/tools")
      .then(response => response.json())
      .then(response => this.setState({ tools: response.data }))
      .catch(err => console.error(err));
  };

  getTrees = _ => {
    fetch("/trees")
      .then(response => response.json())
      .then(response => this.setState({ trees: response.data }))
      .catch(err => console.error(err));
  };

  getMaintenance = _ => {
    fetch("/garden_main")
      .then(response => response.json())
      .then(response => this.setState({ maintenance: response.data }))
      .catch(err => console.error(err));
  };

  getItems = _ => {
    fetch("/items")
      .then(response => response.json())
      .then(response => this.setState({ items: response.data }))
      .catch(err => console.error(err));
  };

  render() {
    let pathArray = window.location.pathname.split("/");
    let secondLevelLocation = pathArray[0];
    let newPathname = "";
    for (let i = 0; i < pathArray.length; i++) {
      newPathname += "/";
      newPathname += pathArray[i];
    }

    let tempid = pathArray[2];

    const { tools } = this.state;
    const { trees } = this.state;
    const { maintenance } = this.state;
    const { items } = this.state;

    const listTools = tools.map(tool => (
      <li key={tool.product_id}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>this is image {this.getimage(tool.product_id)}</div>
        <p>name : {tool.product_name}</p>
        <p>description "{tool.description}</p>
      </li>
    ));

    const listTrees = trees.map(tree => (
      <li key={tree.product_id}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>this is image {this.getimage(tree.product_id)}</div>
        <p>name : {tree.product_name}</p>
        <p>description "{tree.description}</p>
      </li>
    ));

    const listMaintenance = maintenance.map(maintain => (
      <li key={maintain.product_id}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>this is image {this.getimage(maintain.product_id)}</div>
        <p>name : {maintain.product_name}</p>
        <p>description "{maintain.description}</p>
      </li>
    ));
    const listAll = items.map(item => (
      <li key={item.product_id}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>this is image {this.getimage(item.product_id)}</div>
        <p>name : {item.product_name}</p>
        <p>description "{item.description}</p>
      </li>
    ));

    if (tempid >= 1 && tempid <= 20) {
      return <div>{listTrees[localStorage.getItem("treeID")]}</div>;
    } else if (tempid >= 21 && tempid <= 23) {
      return <div>{listTools[localStorage.getItem("toolID")]}</div>;
    } else if (tempid >= 30 && tempid <= 31) {
      return (
        <div>{listMaintenance[localStorage.getItem("maintenanceID")]}</div>
      );
    }
  }

  getimage(product_id) {
    if (product_id == 1) {
      return (
        <div className="kauri">
          <img src={Kauri} alt={cat} width="250px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 2) {
      return (
        <div className="pohutakawa">
          <img src={Pohu} alt={cat} width="350px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 3) {
      return (
        <div className="kowhai">
          <img src={Kowhai} alt={Kowhai} width="350px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 4) {
      return (
        <div className="CabbageTree">
          <img
            src={CabbageTree}
            alt={CabbageTree}
            width="350px"
            height="300px"
          ></img>{" "}
        </div>
      );
    } else if (product_id == 5) {
      return (
        <div className="Apple">
          <img src={Apple} alt={Apple} width="250px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 6) {
      return (
        <div className="Feijoa">
          <img src={Feijoa} alt={Feijoa} width="350px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 7) {
      return (
        <div className="Lemon">
          <img src={Lemon} alt={Lemon} width="300px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 8) {
      return (
        <div className="Olive">
          <img src={Olive} alt={Olive} width="250px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 9) {
      return (
        <div className="BabyBlue">
          <img src={BabyBlue} alt={BabyBlue} width="330px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 10) {
      return (
        <div className="SwampP">
          <img src={SwampP} alt={SwampP} width="350px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 11) {
      return (
        <div className="MannaGum">
          <img src={MannaGum} alt={MannaGum} width="350px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 12) {
      return (
        <div className="RedStringy">
          <img
            src={RedStringy}
            alt={RedStringy}
            width="350px"
            height="300px"
          ></img>{" "}
        </div>
      );
    } else if (product_id == 13) {
      return (
        <div className="UmbrellaPalm">
          <img
            src={UmbrellaPalm}
            alt={UmbrellaPalm}
            width="300px"
            height="300px"
          ></img>{" "}
        </div>
      );
    } else if (product_id == 14) {
      return (
        <div className="PittINikau">
          <img
            src={PittINikau}
            alt={PittINikau}
            width="330px"
            height="300px"
          ></img>{" "}
        </div>
      );
    } else if (product_id == 15) {
      return (
        <div className="Bamboo">
          <img src={Bamboo} alt={Bamboo} width="350px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 16) {
      return (
        <div className="PortLaurel">
          <img
            src={PortLaurel}
            alt={PortLaurel}
            width="350px"
            height="300px"
          ></img>{" "}
        </div>
      );
    } else if (product_id == 17) {
      return (
        <div className="Olearia">
          <img src={Olearia} alt={Olearia} width="350px" height="300px"></img>{" "}
        </div>
      );
    } else if (product_id == 18) {
      return (
        <div className="SilverBirch">
          <img
            src={SilverBirch}
            alt={SilverBirch}
            width="350px"
            height="300px"
          ></img>{" "}
        </div>
      );
    } else if (product_id == 19) {
      return (
        <div className="MtFujiCherry">
          <img
            src={MtFujiCherry}
            alt={MtFujiCherry}
            width="300px"
            height="300px"
          ></img>{" "}
        </div>
      );
    } else if (product_id == 20) {
      return (
        <div className="EnglishOak">
          <img
            src={EnglishOak}
            alt={EnglishOak}
            width="350px"
            height="300px"
          ></img>{" "}
        </div>
      );
    }
    if (product_id == 21) {
      return (
        <div className="shovel">
          <img src={Shovel} alt={cat} width="200px" height="150px"></img>
        </div>
      );
    } else if (product_id == 22) {
      return (
        <div className="Rake">
          <img src={Rake} alt={cat} width="200px" height="150px"></img>
        </div>
      );
    } else if (product_id == 23) {
      return (
        <div className="Hoe">
          <img src={Hoe} alt={cat} width="200px" height="150px"></img>
        </div>
      );
    }
    if (product_id == 30) {
      return (
        <div className="Fertiliser">
          <img
            src={Fertiliser}
            alt={Fertiliser}
            width="130px"
            height="150px"
            onClick={() => this.onclickproduct(product_id)}
          ></img>{" "}
        </div>
      );
    } else if (product_id == 31) {
      return (
        <div className="Bucket">
          <img
            src={Bucket}
            alt={Bucket}
            width="200px"
            height="150px"
            onClick={() => this.onclickproduct(product_id)}
          ></img>{" "}
        </div>
      );
    }
  }
}
