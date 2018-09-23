import React from "react";
import axios from "axios";
import styled from 'styled-components';
import Search from "./customer/search.jsx";
import Orders from "./customer/orders.jsx";
import Menu from "./customer/menu.jsx";
import Checkout from "./customer/checkout.jsx";
import Modal from "./customer/modal.jsx";
import Tipping from "./customer/Tipping.jsx"
import UserSurvey from "./bar/UserSurvey.jsx";


//Styled Components
const Wrapper = styled.div`
  max-width: 480px;
`;
class App extends React.Component {
  state = {
    menu: {},
    orders: [],
    checkout: {
      CustomerId: "",
      status: "pending",
      drinkOrder: [],
      total: 0,
    },
    survey: false,
    search: "",
    modal: "",
    showOrders: false,
    orderID: ""
  };

  componentDidMount() {
    this.getMenu();
    this.getCustomerOrders();
    this.interval = setInterval(() => {
      this.getCustomerOrders();
    }, 100000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // called when adding drink(s) to your order for checkout
  checkOutUpdate = order => {
    let drinks = this.state.checkout.drinkOrder;
    let drinksExistsinCheckOut = false;
    for (var i = 0; i < drinks.length; i++) {
      if (drinks[i].menuItemId === order.menuItemId) {
        drinksExistsinCheckOut = true;
        drinks[i].quantity += order.quantity;
        drinks[i].subtotal += order.subtotal;
      }
    }
    let orderTotal = this.state.checkout.total + order.subtotal;
    if (!drinksExistsinCheckOut) {
      drinks.push(order);
      this.setState({
        checkout: Object.assign({}, this.state.checkout, { drinkOrder: drinks, total: orderTotal })
      });
    }
  };

  // handle live search
  handleSearchOnKeyUp = e => {
    if (e.key !== "Enter") {
      this.setState({
        search: e.target.value
      });
    }
  };

  // retreive business menu from db
  getMenu() {
    axios.get(`/api/menu/categories`).then(response => {
      this.setState({
        menu: response.data
      });
    });
  }

  getSurvey() {
    axios.get(`/api/bar/survey`).then(response => {
      console.log('Survey', response);
      if (response.data === true) {
        this.setState({
          survey: true,
        }, () => this.changeModal("survey"))
      }
    });
  }

  // retrieve customer orders from db
  getCustomerOrders() {
    let customerID = 1;
    axios
      .get(`/api/customers/${customerID}/orders`)
      .then(response => {
        this.setState({
          orders: response.data
        });
        // timeout below will spam the server, use with caution!
        // setTimeout(this.getCustomerOrders(), 2000); 
      });
  }

  // change modal status to show or not (for checkout)
  changeModal(view) {
    this.setState({
      modal: view,
    });
  }

  changeModalUpdateTotal(view, wTipTotal) {
    this.setState({
      checkout: Object.assign({}, this.state.checkout, { total: wTipTotal }),
      modal: view,
    });
  }

  
  // show the status of the customer orders
  toggleOrderView() {
    this.setState(prevState => ({
      showOrders: !prevState.showOrders
    }));
  }

  emptyCart() {
    this.setState({
      checkout: {
        CustomerId: "",
        status: "pending",
        drinkOrder: [],
        total: 0,
      }
    });
  }

  getData = (id) => {
    console.log('THE ID', id);
    this.setState({orderID: id})
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
            getSurvey={this.getSurvey.bind(this)}
            getData={this.getData.bind(this)}

          />
        </Modal>
      );
    }
    if (this.state.modal === "tipping") {
      return (
        <Modal>
          <Tipping 
            checkout={this.state.checkout} 
            updateTotal={this.changeModalUpdateTotal.bind(this)}
            changeModal={this.changeModal.bind(this)}
            />
        </Modal> 
      )
    }
    if (this.state.modal === "survey") {
      return (
        <Modal>
          <UserSurvey
            id = {this.state.orderID}
            changeModal={this.changeModal.bind(this)}
          />
        </Modal>
      );
    }
  }

  render() {
    return (

      <Wrapper>
        {/* <h1>Title</h1> */}
        <div id="test" />
        <nav>
          <Search handleSearch={this.handleSearchOnKeyUp} />{" "}
          <button onClick={() => this.changeModal("checkout")}>Checkout</button>{" "}
          <button onClick={() => this.toggleOrderView()}>My Orders</button>
        </nav>
        {this.state.showOrders === true ? (
          <Orders currentOrders={this.state.orders} />
        ) : null}
        <Menu
          menuItems={this.state.menu}
          checkOutUpdate={this.checkOutUpdate}
          search={this.state.search.toLowerCase()}
        />
        <div>{this.renderModal()}</div>
      </Wrapper>
    );
  }
}

export default App;
