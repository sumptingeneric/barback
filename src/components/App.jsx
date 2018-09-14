import React from "react";
import Header from "./customer/Header.jsx";
import Menu from "./customer/menu.jsx";
import Orders from "./customer/orders.jsx";



class App extends React.Component {
  state = {
    menu: {},
    orders: [],
    checkout: {}
  };



  render() {
    return (
      <div>
        <Header />
        <Orders />
        <Menu />
      </div>
    );
  }
}

export default App;
