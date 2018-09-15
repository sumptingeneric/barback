import React from "react";
import axios from "axios";

import CurrentQueueItem from "./currentqueueitem.jsx";
import PendingQueueItem from "./pendingqueueitem.jsx";

class Queue extends React.Component {
  state = {
    currentOrder: [],
    pendingOrders: []
  };

  componentDidMount() {
    this.getCurrentOrder();
    this.getPendingOrders();
  }

  getCurrentOrder() {
    axios.get("http://localhost:7337/api/orders/current").then(response => {
      var currentOderArray = Object.values(response.data);
      this.setState({
        currentOrder: currentOderArray[0]
      });
    });
  }

  getPendingOrders() {
    axios.get("http://localhost:7337/api/orders/pending").then(response => {
      this.setState({
        pendingOrders: response.data
      });
      // console.log("These are the pending orders: ", this.state.pendingOrders);
    });
  }

  renderCurrentOrder() {
    const { currentOrder } = this.state;
    if (currentOrder.length) {
      return (
        <CurrentQueueItem
          reload={this.componentDidMount.bind(this)}
          order={this.state.currentOrder}
        />
      );
    } else {
      return <span>No order has been selected.</span>;
    }
  }

  renderPendingOrders() {
    const { pendingOrders } = this.state;
    if (pendingOrders) {
      return (
        <PendingQueueItem
          current={this.state.currentOrder}
          reload={this.componentDidMount.bind(this)}
          order={this.state.pendingOrders}
        />
      );
    } else {
      return <span>There are no currently no orders pending.</span>;
    }
  }

  render() {
    return (
      <div>
        <h2>Queue</h2>
        <div className="current-order">
          <h3>This is the Current Order</h3>
          {this.renderCurrentOrder()}
        </div>
        <div className="pending-orders">
          <h3>These are the Pending Orders</h3>
          {this.renderPendingOrders()}
        </div>
      </div>
    );
  }
}

export default Queue;
