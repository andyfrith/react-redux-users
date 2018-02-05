import React from 'react';
import UsersContainer from '../../containers/UsersContainer';

class UsersPage extends React.Component {
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col mdl-card">
          <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Users</h3>
          <UsersContainer />
        </div>
      </div>
    );
  }
}

export default UsersPage;
