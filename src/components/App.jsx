import React from "react";
import Search from "./customer/search.jsx";
import Orders from "./customer/orders.jsx";
import Menu from "./customer/menu.jsx";
class App extends React.Component {
  state = {
    test: ""
  };

  render() {
    return (
      <div>
        <h1>Title</h1>
        <Search />
        <Orders />
        <Menu />
      </div>
    );
  }
}

export default App;
