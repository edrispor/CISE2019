import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../components/actions/cartActions";

class Cart extends Component {
  componentWillMount() {
    onbeforeunload = e => "Don't leave";
  }

  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
    this.forceUpdate();
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
    this.forceUpdate();
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
    this.forceUpdate();
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li id="section-cartitems" key={item.product_id}>
            <div>
              <h3>{item.product_name}</h3>
              <br />
              <b>Unit Price: ${item.product_price}</b>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div>
                <Link to="/account/cart">
                  <i
                    onClick={() => {
                      this.handleAddQuantity(item.product_id);
                    }}
                  >
                    ↑
                  </i>
                </Link>
                <Link to="/account/cart">
                  <i
                    onClick={() => {
                      this.handleSubtractQuantity(item.product_id);
                    }}
                  >
                    ↓
                  </i>
                </Link>
              </div>
              <button
                className="btncart"
                onClick={() => {
                  this.handleRemove(item.product_id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>
        No Items in Cart.
        <Link to="/item"> Start Browsing Now!</Link>
      </p>
    );
    return (
      <div>
        <div>
          <h2>Shopping Cart:</h2>
          <ul>{addedItems}</ul>
        </div>
        <Recipe></Recipe>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
