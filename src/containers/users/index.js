import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser, selectUser } from '../../actions/userActions';
import UsersList from '../../components/users/list';

const UsersContainer = ({ users, deleteUser, selectUser }) =>
  users.length > 0 ? (
    <UsersList
      users={users}
      onEditUserClick={selectUser}
      onDeleteUserClick={deleteUser}
    />
  ) : (
    <p>No Divas!</p>
  );

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps, {
  deleteUser,
  selectUser
})(UsersContainer);
