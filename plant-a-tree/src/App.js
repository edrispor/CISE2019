import React from 'react';
import logo from './logo.svg';
import './App.css';
import "boostrap/dist/css/boostrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">column number one</div>
        <div className="col-6">
          <span>
            <i className="fas fa-home"/>
          </span>
        </div>
      </div>
    </div>
  );
}

/**<header className="App-header">
        <img src={logo} className="App=logo" alt="logo" />
        <p>
          Edit <code> src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> Hola amigos ponte a trabajar por favor</h1>
      </header> */

export default App;
