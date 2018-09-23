import React from "react";
import axios from "axios";
import styled from "styled-components";


const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  padding-bottom: 25px;
  align-items: center;
  text-align: center;
  border: 15px solid red;
`;
const Clickable = styled.button`
  margin-top: 20px;
  width: 80%;
  padding: 1rem;
  border-radius: 10px;
`;

const Image = styled.img`
  height: 120px;
  margin: 10px;
`;

class CurrentQueueItem extends React.Component {
  constructor(props) {
    super(props);
  }

  updateStatusToComplete(order) {
    // call to API to update status of order from 'current' to 'complete'
    let custId = 1;
    let orderId = this.props.order[0].OrderId;
    axios
      .put(
        `/api/customers/${custId}/orders/${orderId}/complete`
      )
      .then(() => {
        this.props.reload();
      });

    console.log(
      "The status of ",
      order[0].OrderId,
      ' has been updated to "complete."'
    );
  }

  render() {
    
    return (
      <div>
      <OrdersContainer>
        <h4>Current Order</h4>
        <div className="order-item">
          {this.props.order.map((item, index) => {
            return (
              <div key={item.MenuItemId}>
                <div className="menu-item-image">
                  <Image src={item.MenuItem.imageUrl} alt="" />
                </div>
                <div className="menu-item-name">{item.MenuItem.name}</div>
                <div className="menu-item-quantity">
                  Quantity: {item.quantity}
                </div>
                {(this.props.order.length - 1 !== index) ? <hr /> : null}
              </div>
            )

          })}
        </div>
        <Clickable
          onClick={() => this.updateStatusToComplete(this.props.order)}
        >
          Mark as Complete
        </Clickable>
      </OrdersContainer>
      
      </div>
    );
  }
}

export default CurrentQueueItem;
