import React from "react";
import CurrentQueueItem from "./queueitem.jsx";
import axios from "axios";

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
      this.setState({
        currentOrder: response.data
      });
      console.log('This is the current order: ', this.state.currentOrder);
    });
  }

  getPendingOrders() {
    axios.get("http://localhost:7337/api/orders/pending").then(response => {
      this.setState({
        pendingOrders: response.data
      });
      console.log('These are the pending orders: ', this.state.pendingOrders);
    });
  }

  renderCurrentOrder() {
    const { currentOrder } = this.state;
    if (currentOrder.length) {
      return (
        <div className="currentOrderItem" >
            <CurrentQueueItem order={this.state.currentOrder} />
        </div>
      );
    } else {
      return <span>No current order has been selected.</span>;
    }
  }

  render() {
    return (
      <div>
        <h2>Queue</h2>
        <div className="currentOrder">
          <h3>This is the Current Order</h3>
          {this.renderCurrentOrder()}
        </div>
        <div className="pendingOrders">
          <h3>These are the Pending Orders</h3>
          {/* <QueueItem order={this.state.pendingOrders} /> */}
        </div>
      </div>
    );
  }
}

export default Queue;
