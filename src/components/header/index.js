import React from 'react';
import { Link } from 'react-router-dom';
import { Actions } from '../common/styles';
import { Button } from '../common/form/styles';

const Header = () => {
  return (
    <Actions>
      <Link to="/">
        <Button primary>Show Users</Button>
      </Link>
      <Link to="/user">
        <Button primary>Add User</Button>
      </Link>
    </Actions>
  );
};

export default Header;
