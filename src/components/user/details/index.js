import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ( { user } ) =>
  ( user ? (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col mdl-card">
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.address}</p>
      </div>
    </div>
  ) : (
    <div>No user selected</div>
  ) );

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetails;
