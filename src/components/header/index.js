import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { Actions } from '../common/styles';
import { Button } from '../common/form/styles';

const Header = ({ dispatch }) => {
  return (
    <Actions>
      <Button
        primary
        onClick={(e) => {
          e.preventDefault();
          dispatch(loadUsers());
        }}>
        Load Divas
      </Button>
      <Link to="/">
        <Button primary>Show Divas</Button>
      </Link>
      <Link to="/user">
        <Button primary>Add Diva</Button>
      </Link>
    </Actions>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Header);
