import React from "react";
import axios from "axios";
import styled from "styled-components";

// styled components for css styling

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  border: 1px solid;
  margin: 30px 30px;
  align-items: center;
  text-align: center;
`;

const DivMargin20 = styled.div`
  margin: 20px;
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
        `/api/customers/${custId}/orders/${orderId}/current`,
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
              <div key={this.props.orderId} >
                <Container>
                  {this.props.order[orders].map((orderDetails, index) => {
                    return (
                      <DivMargin20 key={index}>
                        <div>
                          <Image src={orderDetails.MenuItem.imageUrl} />
                        </div>
                        {orderDetails.MenuItem.name} <br />
                      </DivMargin20>
                    );
                  })}
                  <Button onClick={() => this.updateStatusToCurrent(orders)}>
                    Make Current Order
                  </Button>
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
