import React, { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = _ => {
    fetch("/user")
      .then(response => response.json())
      .then(response => this.setState({ user: response.data }))
      .catch(err => console.error(err));
  };

  renderUser = ({ user_id, user_name, user_email }) => (
    <div key={user_id}>
      {user_id} : {user_name} : {user_email}
    </div>
  );
  render() {
    const { user } = this.state;
    return <div>{user.map(this.renderUser)}</div>;
  }
}
