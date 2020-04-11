import React, {useEffect, useState} from 'react';
import SimpleUserData from './SimpleUserData';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

function UserDataReactHooks() {
  const [data, setData] = useState({users: [], isFetching: false});

  console.log(data);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setData({users: data.users, isFetching:true});
        const response = await fetch(USER_SERVICE_URL);
        console.log(response.data.users);
        setData({users: response.data, isFetching: false});
      } catch (e) {
        console.log(`Caught error: ${e}`);
        setData({users: data.users, isFetching: false});
      }
    };
    fetchUsers();
  }, []);

  return <SimpleUserData data={data.users} isFetching={data.isFetching} />
}

export default UserDataReactHooks;