import React from "react";
import { Router, Link } from "@reach/router";
import Search from "./customer/search.jsx";
import Orders from "./customer/orders.jsx";
import Menu from "./customer/menu.jsx";
import Checkout from "./customer/checkout.jsx";

class App extends React.Component {
  state = {
    menu: {},
    orders: [],
    checkout: {}
  };

  render() {
    return (
      <div>
        <h1>Title</h1>
        <nav>
          <Link to="/checkout">Checkout</Link>
        </nav>
        <Router>
          <Checkout path="/checkout" />
        </Router>
        <Search />
        <Orders />
        <Menu />
      </div>
    );
  }
}

export default App;
