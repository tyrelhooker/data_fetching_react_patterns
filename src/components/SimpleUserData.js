import React from 'react';

const SimpleUserData = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map(user => 
        <ul>
          Key = {user.id}
          <li>{`Name: ${user.name}`}</li>
          <li>{`UserName: ${user.username}`}</li>
        </ul>
       )}

      <p>{props.isFetching ? 'Fetching users...' : ''}</p>
    </div>
  )
}

export default SimpleUserData;