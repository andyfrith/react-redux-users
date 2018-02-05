import React from 'react'
import PropTypes from 'prop-types'
import UserListItem from './UserListItem'

const UsersList = ({ users, onEditUserClick, onDeleteUserClick }) => (
  <ul className='user-list mdl-list'>
    {users.map(user =>
      <UserListItem
        key={user.id}
        {...user}
        onEditUserClick={() => onEditUserClick(user)}
        onDeleteUserClick={() => onDeleteUserClick(user)}
      />
    )}
  </ul>
)

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEditUserClick: PropTypes.func.isRequired,
  onDeleteUserClick: PropTypes.func.isRequired
}

export default UsersList;
