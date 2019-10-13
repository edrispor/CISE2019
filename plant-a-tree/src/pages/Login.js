import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserSess from "../components/UserProfile";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: "",
      show: false,
      show2: false
    };
    this.toggleDiv = this.toggleDiv.bind(this);
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch("/data")
      .then(response => response.json())
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.error(err));
  };
  toggleDiv = e => {
    e.preventDefault();
    var resultUser = this.state.users.findIndex(
      entry => entry.username === this.inputusername.value
    );
    var resultPass = this.state.users.findIndex(
      entry => entry.pass === this.inputpass.value
    );

    if (resultUser === resultPass) {
      const { show } = this.state;
      this.setState({ show: true });
      const { show2 } = this.state;
      this.setState({ show2: false });
      localStorage.setItem("user", this.inputusername.value);
      window.location.href = "/";
      // UserSess.setName(localStorage.getItem("user"));
    } else {
      const { show2 } = this.state;
      this.setState({ show2: true });
    }
  };

  render() {
    const { users } = this.state;

    const listItems = users.map(d => (
      <li key={d.username}>
        {d.username}>{d.email}
      </li>
    ));
    return (
      <div className="pagelayout">
        <div className="login-page">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="username"
                ref={inusername => (this.inputusername = inusername)}
                value={this.props.inputValue}
                onChange={this.props.inputChanged}
                placeholder="Enter a username"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                id="pass"
                ref={inpass => (this.inputpass = inpass)}
                placeholder="Enter password"
              />
            </div>
            <input type="checkbox" name="rememberme" value="Remember" />{" "}
            Remember me <br /> <br />
            <Link to="/login/forget-password">Forgot Password</Link> <br />{" "}
            <br />
            <button
              width="135px"
              color="#F4FF77"
              radius="50px"
              class="btnitem"
              onClick={this.toggleDiv}
            >
              > Login
            </button>
          </form>
          {this.state.show && <Box />}
          {this.state.show2 && <Box2 />}
        </div>
      </div>
    );
  }
}
class Box extends Component {
  render() {
    return (
      <div>
        {" "}
        Login Succesfull... Click <Link to="/item">here</Link> to browse our
        collection
      </div>
    );
  }
}
class Box2 extends Component {
  render() {
    return (
      <div>
        Login failed...please try again or click{" "}
        <Link to="/register">HERE</Link>to Register an account
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChanged: evt => {
      console.log("changed", evt.target.value);
      const action = { type: "INPUT_CHANGE", text: evt.target.value };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
