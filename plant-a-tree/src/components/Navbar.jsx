import React, { Component } from "react";
import { Link } from "react-router-dom";
import treelogo from "../images/treelogo.svg";
import shoppingcart from "../images/shoppingcart.svg";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
  // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>

  /*state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };*/

  render() {
    return (
      <header className="navbar">
        <div className="nav-center">
          <div className="logo">
            <Link to="/">
              <img src={treelogo} width="200" height="100" alt="Plant a Tree" />
            </Link>
          </div>
          <nav className="nav-links">
            <ul>
              <li>
                <Link to="/items">Browse</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/account/favourites">Favourited</Link>
              </li>
              <li>
                <Link to="/login"> Login</Link>
              </li>
              <li>
                <Link to="/register"> Register</Link>
              </li>
            </ul>
          </nav>
          <nav className="cart">
            <Link to="/account/cart">
              <img src={shoppingcart} alt="Cart" />
            </Link>
          </nav>
          <div className="search-bar">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-text">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
      </header>
    );
  }
}
