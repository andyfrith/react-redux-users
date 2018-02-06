import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to='/'>Users</Link>
      <Link className="item" to='/user'>Add User</Link>
    </div>
  );
};

export default Header;
