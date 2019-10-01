import React, { Component } from "react";
import { connect } from "react-redux";
import UserSess from "../components/UserProfile";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userprofile: ""
    };
    this.updateUser = this.updateUser.bind(this);
    this.userLogOut = this.userLogOut.bind(this);

    //console.log(this.props);
  }
  updateUser = userprofile => {
    this.setState({ userprofile });
  };

  handleInputChange(event) {
    console.log("handle input change");
    this.setState({ userprofile: this.props.getProfile });
    console.log(this.props.userprofile);
  }
  userLogOut() {
    localStorage.setItem("user", "Not logged in");
    window.location.href = "/";
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

  render() {
    const { users, userprofile } = this.state;

    var result = users.findIndex(
      entry => entry.username === localStorage.getItem("user")
    );

    const listItems = users.map(d => (
      <li key={d.username}>
        <p>User Name : {d.username}</p>
        <p> Email : {d.email}</p>
        <p> Shipping Address : {d.shipping}</p>
      </li>
    ));
    return (
      <div>
        <p>your account details are listed bellow</p>
        <div>{listItems[result]}</div>
        <button
          width="135px"
          color="#F4FF77"
          radius="50px"
          class="btnitem"
          onClick={this.userLogOut}
        >
          Logout
        </button>
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
)(Profile);
