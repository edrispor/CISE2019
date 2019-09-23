import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Description from "./pages/Description";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import Maintenance from "./pages/Maintenance";
import Policy from "./pages/Policy";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Tools from "./pages/Tools";
import Tree from "./pages/Tree";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/description" component={Description} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/account/favourites" component={Favourites} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/items/maintenance" component={Maintenance} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/items/tools" component={Tools} />
        <Route exact path="/items/tree" component={Tree} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
