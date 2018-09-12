import React from "react";
import QueueItem from "./queueitem.jsx";
import axios from "axios";

class Queue extends React.Component {
  state = {
    currentOrder: {},
    pendingOrders: {}
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

  render() {
    return (
      <div>
        <h2>Queue</h2>
        <QueueItem />
      </div>
    );
  }
}

export default Queue;
