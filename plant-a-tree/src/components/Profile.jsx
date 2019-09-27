import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userprofile: ""
    };
    this.updateUser = this.updateUser.bind(this);

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
      entry => entry.username === this.props.inputValue
    );

    const listItems = users.map(d => (
      <li key={d.username}>
        {d.username}>{d.email}
      </li>
    ));
    return (
      <div>
        <input
          value={this.props.inputValue}
          onChange={this.props.inputChanged}
        />
        {this.props.inputValue}
        <div>{listItems[result]}</div>;
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
