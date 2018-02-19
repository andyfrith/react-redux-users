import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions';
import UserForm from '../../components/user/form/';

const UserContainer = ( { isEditing, selectedUser, createUserConnect } ) => (
  <UserForm
    selectedUser={selectedUser}
    createUser={createUserConnect}
    isEditing={isEditing}
  />
);

UserContainer.defaultProps = {
  selectedUser: null,
};

UserContainer.propTypes = {
  createUserConnect: PropTypes.func.isRequired,
  selectedUser: PropTypes.object,
  isEditing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ( {
  selectedUser: state.selectedUser,
} );

export default connect( mapStateToProps, { createUserConnect: createUser } )( UserContainer );
