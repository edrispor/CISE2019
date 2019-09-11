import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
export default class Navbar extends Component {
  // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Plant a Tree" />
            </Link>
          </div>
          <div className="Links">
            <ul className="nav-links">
              <li>
                <Link to="/tree">Browse</Link>
              </li>
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <Link to="/">Cart</Link>
              </li>
              <li>
                <Link to="/">Favourite</Link>
              </li>
              <li>
                <Link to="/login"> Login</Link>
              </li>
              <li>
                <Link to="/register"> Register</Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <form className="search-bar">
              <input type="text" placeholder="Seach" />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
/*
<ul id="horizontal-list">
            <li>
              <Link to="/"> Home</Link>
            </li>

            <li>
              <Link to="/search"> Search</Link>
            </li>
            <li>
              <Link to="/details"> Details</Link>
            </li>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <Link to="/register"> Register</Link>
            </li>
          </ul>
*/
