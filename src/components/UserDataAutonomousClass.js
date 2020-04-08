// Component fetches its own data, therefore is autonomous.
// Uses fetch API and React Class

import React, { Component } from 'react';

class UserDataAutonomousClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: []
    };
  }

  fetchUsers() {
    this.setState({ ...this.state, isFetching: true});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => {
        this.setState({ users: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false })
      });
  };

  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const { users, isFetching } = this.state;

    return (
      <div>
        {users.map(user => 
          <ul>
            Key = {user.id}
            <li>{`Name: ${user.name}`}</li>
            <li>{`UserName: ${user.username}`}</li>
          </ul>
        )}

        <p>{isFetching ? 'Fetching users...' : ''}</p>
      </div>
    )
  }
}

export default UserDataAutonomousClass;