import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <a  className="Hook-link"
        href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">
          Learn React Hooks
        </a>
      </header>
    </div>
  );
}

export default App;
