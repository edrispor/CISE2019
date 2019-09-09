import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Tree from "./pages/Tree";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/tree" component={Tree} />
        <Route component={Error} />
      </Switch>
    </>
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
