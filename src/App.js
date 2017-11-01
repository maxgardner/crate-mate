import React, { Component } from 'react';
import Header from './components/Header';
import ViewArea from './components/ViewArea';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'login',
      isLoggedIn: true,
      user: {}
    }
  }
  render() {
    return (
      <div id="app">
        <Header />
        { this.state.isLoggedIn
          ? <ViewArea />
          : <Login />
        }
      </div>
    );
  }
}

export default App;
