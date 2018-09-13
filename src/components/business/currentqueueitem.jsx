import React from "react";

class CurrentQueueItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  updateStatusToComplete(order) {
    // call to API to update status of order from 'pending' to 'current'
    console.log('The status of ', order[0].OrderId, ' has been updated to "complete."');
  }

  render() {
    return (
      <div className="current-order">
        <h5>Current Queue Item</h5>
        <div className="order-item">
          {this.props.order.map(item =>
            <div key={item.MenuItemId}>
              <div className="menu-item-image">Image</div>
              <div className="menu-item-name">Menu Item Name</div>
              <div className="menu-item-quantity">Quantity: {item.quantity}</div>
            </div>
          )}
        </div>
        <button onClick={() => this.updateStatusToComplete(this.props.order)}>Done</button>      
      </div>
    );
  }
}

export default CurrentQueueItem;
