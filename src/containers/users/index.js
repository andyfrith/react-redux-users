import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser, selectUser } from '../../actions/userActions';
import UsersList from '../../components/users/list';

const UsersContainer = ( { users, deleteUserConnect, selectUserConnect } ) =>
  ( users.length > 0 ? (
    <UsersList
      users={users}
      onEditUserClick={selectUserConnect}
      onDeleteUserClick={deleteUserConnect}
    />
  ) : (
    <p>No Divas!</p>
  ) );

UsersContainer.propTypes = {
  users: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  } ) ).isRequired,
  deleteUserConnect: PropTypes.func.isRequired,
  selectUserConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  users: state.users,
} );

export default connect( mapStateToProps, {
  deleteUserConnect: deleteUser,
  selectUserConnect: selectUser,
} )( UsersContainer );
