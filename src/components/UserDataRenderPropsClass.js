import { Component } from 'react';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

class UserDataRenderPropsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: []
    };
  }

  render = () => this.props.children(this.state);

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ ...this.state, isFetching: true});
    fetch(USER_SERVICE_URL)
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false })
      });
  };
}

export default UserDataRenderPropsClass;