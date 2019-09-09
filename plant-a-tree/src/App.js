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

export default App;
