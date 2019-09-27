import React, { Component } from "react";
import axios from "axios";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataku: [],
      userprofile: "Not logged in"
    };
  }

  klikPost(e) {
    e.preventDefault();
    var url = "/data";
    axios
      .post(url, {
        username: this.inputusername.value,
        pass: this.inputpass.value,
        email: this.inputemail.value,
        shipping: this.inputshipping.value
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.inputusername.value = "";
    this.inputpass.value = "";
    this.inputemail.value = "";
    this.inputshipping.value = "";
  }

  klikGet(e) {
    e.preventDefault();
    var url = "/data";
    axios.get(url).then(ambilData => {
      console.log(ambilData.data);
      this.setState({
        dataku: ambilData.data
      });
    });
  }

  render() {
    const userProfile = this.state.userprofile;
    console.log(userProfile);
    return (
      <div className="container">
        <Zoom>
          <center style={{ margin: "25px" }}>
            <Flip>
              <h3> 🌲 Register 🌲 </h3>
            </Flip>

            <form>
              <div className="form-group" style={{ margin: "15px" }}>
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  ref={inusername => (this.inputusername = inusername)}
                  placeholder="enter a User-Name"
                />
              </div>

              <div className="form-group" style={{ margin: "15px" }}>
                <input
                  className="form-control"
                  type="text"
                  id="pass"
                  ref={inpass => (this.inputpass = inpass)}
                  placeholder="enter a password"
                />
              </div>

              <div className="form-group" style={{ margin: "15px" }}>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  ref={inemail => (this.inputemail = inemail)}
                  placeholder="enter your email address"
                />
              </div>

              <div className="form-group" style={{ margin: "15px" }}>
                <input
                  className="form-control"
                  type="text"
                  id="shipping"
                  ref={inshipping => (this.inputshipping = inshipping)}
                  placeholder="enter your shipping address"
                />
              </div>

              <button
                className="btn btn-success"
                style={{ margin: "15px", width: "200px" }}
                onClick={this.klikPost.bind(this)}
              >
                <Link to="/">Register</Link>
              </button>
            </form>

            <div></div>
          </center>
        </Zoom>
      </div>
    );
  }
}
