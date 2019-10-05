import React, { Component } from "react";
import { connect } from "react-redux";
import mastervisa from "../images/maxresdefault.jpg";

class Payment extends Component {
  render() {
    return (
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
      </b>
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
