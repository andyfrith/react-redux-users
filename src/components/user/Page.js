import React from 'react';
import UserContainer from '../../containers/user/';

const UserPage = ({ match }) => (
  <div>
    <h1>User</h1>
    <UserContainer isEditing={match.params.id ? true : false} />
  </div>
);

export default UserPage;
