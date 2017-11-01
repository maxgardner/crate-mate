import React, { Component } from 'react';
import Search from './Search';
import UserNav from './UserNav';

function NavMenu(props) {
  return (
    <div className="navbar-menu">
      { props.isLoggedIn &&
        <Search /> &&
        <UserNav /> }
    </div>
    );
}

export default NavMenu;
