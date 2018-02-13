import React from 'react';
import UsersContainer from '../../containers/users/';

class UsersPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <UsersContainer />
      </div>
    );
  }
}

export default UsersPage;
