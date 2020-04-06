// import React, { Component } from 'react';

class UserDataClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching = false,
      users: []
    };
  }

  componentDidMount(){

  }

  render() {
    const { id, name, username } = this.state.users
    return (
      <div>
        <ul>
          Key = {id}
          <li>{`Name: ${name}`}</li>
          <li>{`UserName: ${username}`}</li>
        </ul>
        <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
      </div>
    )
  }
}