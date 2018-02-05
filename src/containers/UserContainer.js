
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions';
import UserForm from '../components/users/UserForm';
import UserDetails from '../components/users/UserDetails';

const UserContainer = ({ isEditing, selectedUser, createUser }) => (

  (false) ?
    <UserDetails
      user={selectedUser} />
  :
    <UserForm
      selectedUser={selectedUser}
      createUser={createUser}
      isEditing={isEditing} />
)

UserContainer.propTypes = {
  createUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.object,
  isEditing: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  selectedUser: state.selectedUser
});

export default connect(
  mapStateToProps,
  { createUser }
)(UserContainer);
