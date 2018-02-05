import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mdl-layout mdl-js-layout">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">react-redux-users</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to='/'>Users</Link>
            <Link className="mdl-navigation__link" to='/user'>Add User</Link>
          </nav>
        </div>
      </header>
    	<div className="mdl-layout__drawer">
        <span className="mdl-layout-title">react-redux-users</span>
        <nav className="mdl-navigation">
        <Link className="mdl-navigation__link" to='/'>Users</Link>
        <Link className="mdl-navigation__link" to='/user'>Add User</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
