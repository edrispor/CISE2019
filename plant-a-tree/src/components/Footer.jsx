import React, { Component } from "react";

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
              <p>About Us</p>
              <p>Contact Us</p>
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
