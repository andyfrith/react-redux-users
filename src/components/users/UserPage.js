import React from 'react';
import UserContainer from '../../containers/UserContainer';

const UserPage = ({ match }) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-card">
      <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">User</h3>
      <UserContainer
        isEditing={(match.params.id) ? true : false}
      />
    </div>
  </div>
)

export default UserPage;
