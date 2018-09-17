import React from "react";
import PrevOrderItem from "./prevorderitem.jsx";
import axios from "axios";
import styled from "styled-components";

// styled components for css styling
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Div = styled.div`
  margin: 20px 0; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
`;

const Image = styled.img`
  height: 200px;
`;

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
        <Container>
          <ul>
            {Object.keys(this.state.previousOrders).map((orders, index) => {
              return (
                <div key={index}>
                  <h4>Order #{this.state.previousOrders[orders][0].OrderId}</h4>
                  {this.state.previousOrders[orders].map((orderDetails, index) => {
                    return (
                      <Div key={index}>
                        <div className="menu-item-image">
                          <Image src={orderDetails.MenuItem.imageUrl} />
                        </div>{" "}
                        <div className="menu-item-name">
                          {orderDetails.MenuItem.name}
                          <br />
                          Quantity: {orderDetails.quantity}
                        </div>
                      </Div>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </Container>
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
