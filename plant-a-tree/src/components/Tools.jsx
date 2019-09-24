import React, { Component } from "react";
import Toolsdisplay from "./Toolsdisplay";

export default class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
      temp: []
    };
  }

  componentDidMount() {
    this.getTools();
    let temps = this.formatData(this.tools);
    this.setState({ temp: temps });
  }

  getTools = _ => {
    fetch("/tools")
      .then(response => response.json())
      .then(response => this.setState({ tools: response.data }))
      .catch(err => console.error(err));
  };

  formatData(tools) {
    var { tools } = this.state;
    let tempTools = tools.map(tool => {
      let id = tool.product_id;
      let name = tool.product_name;
      let price = tool.product_price;
      let description = tool.description;
      let photo = tool.photo_link;
      let tags = tool.tags;
      let toolobj = { id, description, name, price, photo, tags };
      return toolobj;
    });
    return tempTools;
  }

  render() {
    let { tools } = this.state;
    console.log(tools);
    tools = tools.map(tool => {
      return <Toolsdisplay key={tool.product_id} tool={tool}></Toolsdisplay>;
    });

    return (
      <section>
        <h1>Featured Tools</h1>
        <div>{tools}</div>
      </section>
    );
  }
}
