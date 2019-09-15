import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import logoname from "../images/logoname.svg";
import shoppingcart from "../images/shoppingcart.svg";
export default class Navbar extends Component {
  // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
  // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
  render() {
    return (
      <header className="navbar">
        <div className="nav-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Plant a Tree" />
            </Link>
          </div>
          <div className="logoname">
            <Link to="/">
              <img src={logoname} width="200" height="100" alt="Plant a Tree" />
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
