import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ExtraLinksPage from "./pages/ExtraLinksPage";
import StoreLocator from "./pages/StoreLocator";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import Maintenance from "./pages/Maintenance";
import Payment from "./pages/Payment";
import Policy from "./pages/Policy";
import Product from "./pages/Product";
import Productall from "./pages/Product_All";
import Register from "./pages/Register";
import ShoppingCart from "./pages/ShoppingCart";
import Tools from "./pages/Tools";
import Tree from "./pages/Tree";
import Footer from "./components/Footer";
import Navbar from "./components/navigation/Navbar";
import ForgetPW from "./pages/ForgetPw";
import Sales from "./pages/Sales";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/cart" component={ShoppingCart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/extralinkspage" component={ExtraLinksPage} />
        <Route exact path="/storelocator" component={StoreLocator} />
        <Route exact path="/item" component={Items} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/items/maintenance" component={Maintenance} />
        <Route exact path="/account/payment" component={Payment} />
        <Route exact path="/policy" component={Policy} />
        <Route path="/product/:something" component={Product} />>
        <Route path="/productall/:something" component={Productall} />>
        <Route exact path="/register" component={Register} />
        <Route exact path="/items/tools" component={Tools} />
        <Route exact path="/items/trees" component={Tree} />
        <Route exact path="/login/forget-password" component={ForgetPW} />
        <Route exact path="/sales" component={Sales} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
