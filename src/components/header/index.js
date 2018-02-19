import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUsers } from '../../actions/userActions';
import { logoutUser } from '../../actions/authenticationActions';
import { Actions } from '../common/styles';
import { Button } from '../common/form/styles';

const Header = ( { loadUsersConnect, logoutUserConnect, isAuthenticated } ) =>
  isAuthenticated && (
    <Actions>
      <Button
        primary
        onClick={( e ) => {
          e.preventDefault();
          loadUsersConnect();
        }}
      >
        Load Divas
      </Button>
      <Link to="/">
        <Button primary>Show Divas</Button>
      </Link>
      <Link to="/user">
        <Button primary>Add Diva</Button>
      </Link>
      <Button
        primary
        onClick={( e ) => {
          e.preventDefault();
          logoutUserConnect();
        }}
      >
        Logout
      </Button>
    </Actions>
  );

const mapStateToProps = state => ( {
  isAuthenticated: state.authentication.isAuthenticated,
} );

Header.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect( mapStateToProps, {
  loadUsersConnect: loadUsers,
  logoutUserConnect: logoutUser,
} )( Header );
