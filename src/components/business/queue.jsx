import React from "react";
import axios from "axios";
import CurrentQueueItem from "./currentqueueitem.jsx";
import PendingQueueItem from "./pendingqueueitem.jsx";
import styled from 'styled-components';

//Styled Components
const DivMargin50 = styled.div`
  margin-top: 50px;
`;

class Queue extends React.Component {
  state = {
    currentOrder: [],
    pendingOrders: []
  };

  componentDidMount() {
    this.getCurrentOrder();
    this.getPendingOrders();
    this.interval = setInterval(() => {
      this.getPendingOrders();

    }, 100000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrentOrder() {
    axios.get(`/api/orders/current`).then(response => {
      var currentOrderArray = Object.values(response.data);
      this.setState({
        currentOrder: currentOrderArray[0]
      });
    });
  }

  getPendingOrders() {
    axios.get(`/api/orders/pending`).then(response => {
      this.setState({
        pendingOrders: response.data
      });
      // console.log("These are the pending orders: ", this.state.pendingOrders);
    });
  }

  renderCurrentOrder() {
    const { currentOrder } = this.state;
    if (currentOrder) {
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
        {/* <h2>Queue</h2>
        <button onClick={() => this.getPendingOrders()}>Refresh</button> */}
        <div className="current-order">
          {/* <h3>This is the Current Order</h3> */}
          {this.renderCurrentOrder()}
        </div>
        <DivMargin50 className="pending-orders">
          <h3>Pending Orders</h3>
          {this.renderPendingOrders()}
        </DivMargin50>
      </div>
    );
  }
}

export default Queue;
