import React from "react";
import axios from "axios";
import Search from "./customer/search.jsx";
import Orders from "./customer/orders.jsx";
import Menu from "./customer/menu.jsx";
import Checkout from "./customer/checkout.jsx";
import Modal from "./customer/modal.jsx";

class App extends React.Component {
  state = {
    menu: {},
    orders: [],
    checkout: {
      CustomerId: "",
      status: "pending",
      drinkOrder: []
    },
    search: "",
    modal: ""
  };

  componentDidMount() {
    this.getMenu();
    this.getCustomerOrders();
    this.interval = setInterval(() => {
      this.getCustomerOrders();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // called when adding drink(s) to your order for checkout
  checkOutUpdate(order) {
    let drinks = this.state.checkout.drinkOrder;
    drinks.push(order);
    this.setState({
      checkout: Object.assign({}, this.state.checkout, { drinkOrder: drinks })
    });
  }

  // handle live search
  handleSearchOnKeyUp(e) {
    if (e.key !== "Enter") {
      this.setState({
        search: e.target.value
      });
    }
  }

  // retreive business menu from db
  getMenu() {
    axios.get("http://localhost:7337/api/menu/categories").then(response => {
      this.setState({
        menu: response.data
      });
    });
  }

  // retrieve customer orders from db
  getCustomerOrders() {
    let customerID = 3;
    axios
      .get(`http://localhost:7337/api/customers/${customerID}/orders`)
      .then(response => {
        //console.log(response.data);
        this.setState({
          orders: response.data
        });
        //setTimeout(this.getCustomerOrders(), 2000);
      });
  }

  // change modal status to show or not (for checkout)
  changeModal(view) {
    this.setState({
      modal: view
    });
  }

  emptyCart() {
    this.setState({
      checkout: {
        CustomerId: "",
        status: "pending",
        drinkOrder: []
      }
    });
  }

  renderModal() {
    if (this.state.modal === "checkout") {
      return (
        <Modal>
          <Checkout
            emptyCart={this.emptyCart.bind(this)}
            checkout={this.state.checkout}
            changeModal={this.changeModal.bind(this)}
            getOrders={this.getCustomerOrders.bind(this)}
          />
        </Modal>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <div id="test" />
        <nav>
          <Search handleSearch={this.handleSearchOnKeyUp.bind(this)} />{" "}
          <button onClick={() => this.changeModal("checkout")}>Checkout</button>
        </nav>
        <Orders currentOrders={this.state.orders} />
        <Menu
          menuItems={this.state.menu}
          checkOutUpdate={this.checkOutUpdate.bind(this)}
          search={this.state.search.toLowerCase()}
        />
        <div>{this.renderModal()}</div>
      </div>
    );
  }
}

export default App;
