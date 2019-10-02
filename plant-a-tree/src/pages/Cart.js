import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  componentWillMount() {
    onbeforeunload = e => "Don't leave";
  }

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li key={item.product_id}>
            <div>test1</div>

            <div>
              <span>{item.product_name}</span>

              <b>Price: {item.product_price}$</b>

              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div>
                <Link to="/cart">
                  <i>arrow_drop_up</i>
                </Link>
                <Link to="/cart">
                  <i>arrow_drop_down</i>
                </Link>
              </div>
              <button>Remove</button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div>
        <div>
          <h5>You have ordered:</h5>
          <ul>{addedItems}</ul>
        </div>
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
    // removeItem: (id)=>{dispatch(removeItem(id))},
    //addQuantity: (id)=>{dispatch(addQuantity(id))},
    //subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  };
};
export default connect(mapStateToProps)(Cart);
