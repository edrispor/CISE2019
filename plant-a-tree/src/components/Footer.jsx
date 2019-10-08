import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footercontainer">
            <div className="column">
              <h1>Useful Links</h1>
              <Link to="/policy">Privacy Policy</Link>
              <br></br>
              <Link to="/policy">Return Policy</Link>
              <br></br>
              <Link to="/extralinkspage">Terms of Use</Link>
            </div>
            <div className="column">
              <h1>Company</h1>
              <Link to="/about">About Us</Link>
              <br></br>
              <Link to="/contact">Contact Us</Link>
              <br></br>
              <Link to="/storelocator">Store Locations</Link>
            </div>
            <div className="column">
              <h1>More links</h1>
              <Link to="/extralinkspage">Link uno</Link>
              <br></br>
              <Link to="/extralinkspage">Link dos</Link>
              <br></br>
              <Link to="/extralinkspage">Link tres</Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>@ Copyright Plant-A-Tree. All Rights Reserved.</p>
          <p>Designed by Terra-Byte</p>
        </div>
      </footer>
    );
  }
}
