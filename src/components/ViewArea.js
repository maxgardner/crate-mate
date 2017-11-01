import React, { Component } from 'react';

function ViewArea(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">
          ViewsList here
        </div>
        <div className="column">
          SelectedView goes here
        </div>
      </div>
    </div>
  );
}

export default ViewArea;
