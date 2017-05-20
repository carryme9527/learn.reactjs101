import React, { Component } from 'react';
import HelloMessage from './HelloMessage';
import Timer from './Timer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <HelloMessage />
            <Timer />
        </div>
    );
  }
}

export default App;
