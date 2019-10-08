import React, { Component } from "react";
import { Link } from "react-router-dom";

const redUrl = () => {
  if (
    localStorage.getItem("user") !== "Not logged in" ||
    localStorage.getItem("user") === null
  ) {
    alert("you are already logged in");
  } else {
    window.location.assign("/login");
  }
};
const redUrlReg = () => {
  if (
    localStorage.getItem("user") !== "Not logged in" ||
    localStorage.getItem("user") === null
  ) {
    alert("you are already logged in");
  } else {
    window.location.assign("/register");
  }
};
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
        <Link onClick={redUrl} className="link">
          Login
        </Link>
      </li>
      <li>
        <Link onClick={redUrlReg} className="link">
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
