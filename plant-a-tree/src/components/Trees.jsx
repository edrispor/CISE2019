import React, { Component } from "react";
import Treesdisplay from "./Treesdisplay";
export default class Trees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: []
    };
  }

  componentDidMount() {
    this.getTrees();
  }

  getTrees = _ => {
    fetch("/trees")
      .then(response => response.json())
      .then(response => this.setState({ trees: response.data }))
      .catch(err => console.error(err));
  };

  render() {
    let { trees } = this.state;
    console.log(trees);
    trees = trees.map(tree => {
      return <Treesdisplay key={tree.product_id} tree={tree}></Treesdisplay>;
    });

    return (
      <div>
        <h1>All Trees and Hedges</h1>
        <div className="gridcontainer">{trees}</div>
      </div>
    );
  }
}
