import React from 'react';
import UserContainer from '../../containers/UserContainer';

const UserPage = ({ match }) => (
  <div>
    <h1>User</h1>
    <UserContainer
      isEditing={(match.params.id) ? true : false}
    />
  </div>
)

export default UserPage;
