import React, { Component } from "react";
import { connect } from "react-redux";
import mastervisa from "../images/maxresdefault.jpg";
import { Link } from "react-router-dom";
import { Prompt } from "react-router-dom";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      shouldBlockNavigation: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({ shouldBlockNavigation: true });
    window.history.back();
    window.location.href = "/";
  };

  render() {
    return (
      <section id="section-cart" class="grid">
        <div class="content-wrap">
          <b>
            <img src={mastervisa} className="paymentimg" />
            <form className="paymentform">
              <b> Payment Amount : {this.props.total}</b>
              <input
                className="form-control"
                type="text"
                placeholder="Card Number"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Name On Card"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Expiry Date"
              />
              <input className="form-control" type="text" placeholder="CVC" />
            </form>
            <Link className="paybtn" onClick={() => this.handleClick()}>
              Pay
            </Link>
            <Prompt
              key="block-nav"
              when={this.state.shouldBlockNavigation}
              message="Purchase succesfull.. return to homepage"
            />
          </b>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

export default connect(mapStateToProps)(Payment);
