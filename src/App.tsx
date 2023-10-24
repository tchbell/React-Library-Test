import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AgeGate } from '@tchbell/react-library';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <AgeGate />
        </div>
      </header>
    </div>
  );
}

export default App;
