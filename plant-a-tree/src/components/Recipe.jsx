import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { addShipping } from "./actions/cartActions";
class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }
  handleChecked1 = e => {
    if (e.target.checked) {
      this.props.addUrbanShipping();
    } else {
      this.props.substractUrbanShipping();
    }
  };

  handleChecked2 = e => {
    if (e.target.checked) {
      this.props.addRuralShipping();
    } else {
      this.props.substractRuralShipping();
    }
  };

  handleChecked3 = e => {
    if (e.target.checked) {
      this.props.addOutsideShipping();
    } else {
      this.props.substractOutsideShipping();
    }
  };

  render() {
    return (
      <div>
        <div>
          <li>
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked1}
              />
              <span>Shipping to urban Auckland addresses(+ $10)</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                ref="shipping2"
                onChange={this.handleChecked2}
              />
              <span>Shipping to rural Auckland addresses(+ $17)</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                ref="shipping3"
                onChange={this.handleChecked3}
              />
              <span>Shipping to addresses outside Auckland (+ $22)</span>
            </label>
          </li>
          <li>
            <p>
              Pickup (no charge - no need to select an option above)-->
              <Link to="/storelocator">Company Branches</Link>
            </p>
            <b>Total (incl GST): ${this.props.total}</b>
          </li>
        </div>
        <div>
          <Link to="/account/Payment">
            <button className="btncart">Checkout</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUrbanShipping: () => {
      dispatch({ type: "ADD_URBAN_SHIPPING" });
    },
    substractUrbanShipping: () => {
      dispatch({ type: "SUB_URBAN_SHIPPING" });
    },
    addRuralShipping: () => {
      dispatch({ type: "ADD_RURAL_SHIPPING" });
    },
    substractRuralShipping: () => {
      dispatch({ type: "SUB_RURAL_SHIPPING" });
    },
    addOutsideShipping: () => {
      dispatch({ type: "ADD_OUTSIDE_SHIPPING" });
    },
    substractOutsideShipping: () => {
      dispatch({ type: "SUB_OUTSIDE_SHIPPING" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
