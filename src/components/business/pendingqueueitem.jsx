import React from "react";

class PendingQueueItem extends React.Component {
  constructor(props) {
    super(props);
  }
 
  updateStatusToCurrent(item) {
    // call to API to update status of order from 'pending' to 'current'
    console.log('The status of ', item.OrderId, ' has been updated to "current."');
  }
  
  render() {
    return (
      <div className="pending-orders">
        <h5>Pending Queue Items</h5>
        <div className="order-item">
          {this.props.order.map((item, index) =>
            <div key={index}>
              <div className="menu-item-image">Image</div>
              <div className="menu-item-name">Menu Item Name</div>
              <div className="menu-item-quantity">Quantity: {item.quantity}</div>
              <button onClick={() => this.updateStatusToCurrent(item)}>Make Current</button>      
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PendingQueueItem;
