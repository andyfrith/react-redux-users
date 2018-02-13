import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../listItem/';
import { Wrapper } from './Wrapper';

const UsersList = ({ users, onEditUserClick, onDeleteUserClick }) => (
  <Wrapper className="ui relaxed divided list">
    {users.map((user) => (
      <UserListItem
        key={user.id}
        {...user}
        onEditUserClick={() => onEditUserClick(user)}
        onDeleteUserClick={() => onDeleteUserClick(user)}
      />
    ))}
  </Wrapper>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onEditUserClick: PropTypes.func.isRequired,
  onDeleteUserClick: PropTypes.func.isRequired
};

export default UsersList;

//  className="ui relaxed divided list"