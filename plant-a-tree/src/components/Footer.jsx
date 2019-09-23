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
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Return Policy</p>
            </div>
            <div className="col-md-3">
              <h1>Company</h1>
              <Link to="/pages/About">About</Link>
              <br></br>
              <Link to="/pages/contact">Contact</Link>
              <p>Store Locations</p>
            </div>
            <div className="col-md-3">
              <h1>More links</h1>
              <p>Link uno</p>
              <p>Link dos</p>
              <p>Link tres</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
