import React from "react";
import PrevOrderItem from "./prevorderitem.jsx";
import axios from "axios";

class PreviousOrder extends React.Component {
  state = {
    previousOrders: []
  };

  componentDidMount() {
    this.getPreviousOrders();
  }

  getPreviousOrders() {
    axios.get("http://localhost:7337/api/orders/complete").then(response => {
      this.setState({
        previousOrders: response.data
      });
      console.log('These are the previous orders: ', this.state.previousOrders);
    });
  }
  
  render() {
    return (
      <div className="previous-orders">
        <h2>Previous Orders</h2>
        {this.state.previousOrders.map((order, index) => {
            return (
              <div className="previous-order-item" key={index}>
                <PrevOrderItem order={order}/>
              </div>
            );
          }          
        )}
      </div>
    );

  }
}

export default PreviousOrder;
