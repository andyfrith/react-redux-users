import React from 'react';
import { Link } from 'react-router-dom';
import { Actions } from '../common/styles';
import { Button } from '../common/form/styles';

const Header = () => {
  return (
    <Actions>
      <Link to="/">
        <Button primary>Show Divas</Button>
      </Link>
      <Link to="/user">
        <Button primary>Add Diva</Button>
      </Link>
    </Actions>
  );
};

export default Header;
