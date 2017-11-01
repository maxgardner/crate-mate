import React, { Component } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

function Header(props) {
  return (
      <header>
        <div className="navbar">
          <div className="container">
            <Logo />
            <NavMenu />
          </div>
        </div>
      </header>
    );
}

export default Header;
