import React from "react";
import axios from "axios";
import styled from "styled-components";

// styled components for css styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  border: 1px solid;
`;

const Image = styled.img`
  height: 200px;
  margin: auto;
`;
class PendingQueueItem extends React.Component {
  constructor(props) {
    super(props);
  }

  updateStatusToCurrent(item) {
    // call to API to update status of order from 'pending' to 'current'
    console.log(item);
    let custId = 1;
    let orderId = item;
    if (this.props.current) {
      var currentId = this.props.current[0].OrderId;
    }
    // console.log("current ID status " + currentId);
    axios
      .put(
        `http://localhost:7337/api/customers/${custId}/orders/${orderId}/current`,
        { current: currentId || null }
      )
      .then(() => {
        this.props.reload();
      });
  }

  render() {
    return (
      <div className="pending-orders">
        {/* <h5>Pending Queue Items</h5> */}
        <div className="order-item">
          {Object.keys(this.props.order).map(orders => {
            return (
              <div>
                <Container>
                  {this.props.order[orders].map(orderDetails => {
                    return (
                      <div>
                        {" "}
                        <br />
                        <div>
                          <Image src={orderDetails.MenuItem.imageUrl} />
                        </div>
                        {orderDetails.MenuItem.name} <br />
                      </div>
                    );
                  })}
                  <button onClick={() => this.updateStatusToCurrent(orders)}>
                    Make Current Order
                  </button>
                </Container>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PendingQueueItem;
