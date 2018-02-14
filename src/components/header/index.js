import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">Users</Link>
      <Link to="/user">Add User</Link>
    </Wrapper>
  );
};

export default Header;
