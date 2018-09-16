import React from "react";
import PrevOrderItem from "./prevorderitem.jsx";
import axios from "axios";

class PreviousOrders extends React.Component {
  state = {
    previousOrders: []
  };

  componentDidMount() {
    this.getPreviousOrders();
  }

  getPreviousOrders() {
    axios.get("http://localhost:7337/api/orders/complete").then(response => {
      var currentOderArray = Object.values(response.data);
      this.setState({
        previousOrders: currentOderArray
      });
      console.log("These are the previous orders: ", this.state.previousOrders);
    });
  }

  render() {
    return (
      <div className="previous-orders">
        <h2>Previous Orders</h2>
        <ul>
          {Object.keys(this.state.previousOrders).map(orders => {
            return (
              <div>
                <div>{this.state.previousOrders[orders][0].OrderId}</div>
                {this.state.previousOrders[orders].map(orderDetails => {
                  return <div>{"Order # " + orderDetails.MenuItem.name}</div>;
                })}
              </div>
            );
          })}
        </ul>
        {/* {this.state.previousOrders.map((order, index) => {
          return (
            <div className="previous-order-item" key={index}>
              <PrevOrderItem order={order} />
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default PreviousOrders;
