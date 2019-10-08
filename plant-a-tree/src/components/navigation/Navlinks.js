import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <ul className="nav-links2">
      <li>
        <Link to="/items" className="link">
          Browse
        </Link>
      </li>
      <li>
        <Link to="/sales" className="link">
          Sale
        </Link>
      </li>
      <li>
        <Link to="/login" className="link">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" className="link">
          Register
        </Link>
      </li>
      <li>
        <Link to="/account/cart" className="link">
          Cart
        </Link>
      </li>
      <li>
        <Link to="/account" className="link">
          {localStorage.getItem("user")}
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
