import React, { Component } from 'react';

function Logo() {
  return (
    <div className="navbar-brand">
      <a id="logo" className="navbar-item" href="/">
        CrateMate
      </a>
      <button className="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Logo;
