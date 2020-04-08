import React, { Component } from 'react';
import SimpleUserData from './SimpleUserData';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

class UserDataHOCClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: []
    };
  }

  render = () => 
    < SimpleUserData data = {
      this.state.users
    }

    isFetching = {
      this.state.isFetching
    }
    />

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ ...this.state, isFetching: true});
    fetch(USER_SERVICE_URL)
      .then(response => response.json())
      .then(result => {
        this.setState({ users: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false })
      });
  };
}

export default UserDataHOCClass;
