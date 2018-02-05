/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserListItem = ({ onEditUserClick, onDeleteUserClick, id, firstName, lastName, address }) => (
  <li
    className="mdl-list__item mdl-list__item--three-line"
  >
  <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">person</i>
      <span>{firstName} {lastName}</span>
      <span className="mdl-list__item-text-body">
        {address}
      </span>
    </span>
    <span>
      <Link className="mdl-list__item-secondary-action" onClick={onEditUserClick} to={ '/user/ ' + id }>
        <i className="material-icons">mode edit</i>
      </Link>
      <Link className="mdl-list__item-secondary-action" onClick={onDeleteUserClick} to='/users'>
        <i className="material-icons">delete forever</i>
      </Link>
    </span>
  </li>
);

UserListItem.propTypes = {
  onEditUserClick: PropTypes.func.isRequired,
  onDeleteUserClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default UserListItem;
