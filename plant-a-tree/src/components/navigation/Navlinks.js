import React, { Component } from "react";
import { Link } from "react-router-dom";

const redUrl = () => {
  if (
    localStorage.getItem("user") === "Not logged in" ||
    localStorage.getItem("user") === null
  ) {
    window.location.assign("/login");
  } else {
    alert("you are already logged in");
  }
};
const redUrlReg = () => {
  if (
    localStorage.getItem("user") === "Not logged in" ||
    localStorage.getItem("user") === null
  ) {
    window.location.assign("/register");
  } else {
    alert("you are already logged in");
  }
};
const redUrlAcc = () => {
  if (
    localStorage.getItem("user") === "Not logged in" ||
    localStorage.getItem("user") === null
  ) {
    alert("Please login to continue");
  } else {
    window.location.assign("/account");
  }
};

const Navlinks = () => {
  return (
    <ul className="nav-links2">
      <li>
        <Link to="/item" className="link">
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
        <Link onClick={redUrlAcc} className="link">
          {localStorage.getItem("user")}
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
