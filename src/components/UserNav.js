import React, { Component } from 'react';

function UserNav(props) {
  return (
    <div className="navbar-item is-dropdown is-hoverable">
      <div className="navbar-link">
        { props.user.name }
      </div>
      <div className="navbar-dropdown is-boxed">
        <a className="navbar-item" href="/account">
          Account
        </a>
        { props.user.isSuperAdmin &&
          <a className="navbar-item" href="/users">
            Users
          </a>
        }
      </div>
    </div>
  );
}

export default UserNav;
