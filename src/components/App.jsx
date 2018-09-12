import React from "react";
import axios from "axios";
import { Router, Link } from "@reach/router";
import Search from "./customer/search.jsx";
import Orders from "./customer/orders.jsx";
import Menu from "./customer/menu.jsx";
import Checkout from "./customer/checkout.jsx";

class App extends React.Component {
  state = {
    menu: {},
    orders: [],
    checkout: {
      CustomerId: "",
      status: "pending",
      drinkOrder: [
        {
          quantity: "",
          subtotal: "",
          MenuItemId: ""
        }
      ]
    },
    modal: ""
  };

  checkOutUpdate(order) {
    let drinks = this.state.checkout.drinkOrder;
    drinks.push(order);
    this.setState({
      checkout: Object.assign({}, this.state.checkout, { drinkOrder: drinks })
    });
    console.log(this.state.checkout);
  }

  componentDidMount() {
    axios.get("http://localhost:7337/api/menu/categories").then(response => {
      this.setState({
        menu: response.data
      });
    });
    // .then(() => console.log(this.state.menu));
  }

  changeModal(view) {
    this.setState({
      modal: view
    });
  }

  renderModal() {
    if (this.state.modal === "checkout") {
      return <Checkout />;
    }
  }
  render() {
    return (
      <div>
        <h1>Title</h1>
        <div id="test" />
        <nav>
          <button onClick={() => this.changeModal("checkout")}>Checkout</button>
        </nav>
        <Router>
          <Checkout path="/checkout" />
        </Router>
        <Search />
        <Orders />
        <Menu
          menuItems={this.state.menu}
          checkOutUpdate={this.checkOutUpdate.bind(this)}
        />
        <div>{this.renderModal()}</div>
      </div>
    );
  }
}

export default App;
