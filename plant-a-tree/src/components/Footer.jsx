import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="f-center">
          <div className="row">
            <div className="col-md-3">
              <h1>Useful Links</h1>
              <ul>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/policy">Return Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h1>Company</h1>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/location">Store Locations</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
