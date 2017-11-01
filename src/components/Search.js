import React, { Component } from 'react';

function Search(props) {
  return (
    <div className="navbar-start">
      <div className="navbar-item">
        <div className="field has-addons">
          <p className="control">
            <input className="input" type="text" placeholder="Find an item" />
          </p>
          <p className="control">
            <button className="button">
              Search
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
