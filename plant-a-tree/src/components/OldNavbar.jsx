import React, { Component } from "react";
import { Link } from "react-router-dom";
import treelogo2 from "../images/treelogo2.svg";
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
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-left">
                <Link to="/">
                  <img
                    src={treelogo2}
                    width="200"
                    height="100"
                    alt="Plant a Tree"
                  />
                </Link>
              </div>
              <div className="search-bar">
                <form className="header-search-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="input-group-text">
                    <Link to="/search">
                      <i className="fa fa-search"></i>
                    </Link>
                  </span>
                </form>
              </div>
              <div className="cart">
                <Link to="/account/cart">
                  <img src={shoppingcart} alt="Cart" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="nav-links">
          <div className="container">
            <ul className="main-menu">
              <li>
                <Link to="/item">Browse</Link>
              </li>
              <li>
                <Link to="/sales">Sale</Link>
              </li>
              <li>
                <Link to="/account/favourites">Favourites</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/account">{localStorage.getItem("user")}</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
