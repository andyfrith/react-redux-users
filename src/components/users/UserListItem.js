/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserListItem = ({
  onEditUserClick,
  onDeleteUserClick,
  id,
  firstName,
  lastName,
  address
}) => (
  <div className="item">
    <Link
      className="right floated content"
      onClick={onEditUserClick}
      to={'/user/ ' + id}>
      <i className="edit middle aligned icon" />
    </Link>
    <Link
      className="right floated content"
      onClick={onDeleteUserClick}
      to="/users">
      <i className="delete middle aligned icon" />
    </Link>
    <i className="large user middle aligned icon" />
    <div className="content">
      <div className="header">
        {firstName} {lastName}
      </div>
      <div className="description">{address}</div>
    </div>
  </div>
);

UserListItem.propTypes = {
  onEditUserClick: PropTypes.func.isRequired,
  onDeleteUserClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default UserListItem;
