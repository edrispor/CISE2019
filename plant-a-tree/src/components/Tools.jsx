import React, { Component } from "react";
import Toolsdisplay from "./Toolsdisplay";

export default class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: []
    };
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

  render() {
    let { tools } = this.state;
    console.log(tools);
    tools = tools.map(tool => {
      return <Toolsdisplay key={tool.product_id} tool={tool}></Toolsdisplay>;
    });

    return (
      <dix>
        <h1>All Tools</h1>
        <div className="gridcontainer">{tools}</div>
      </dix>
    );
  }
}
