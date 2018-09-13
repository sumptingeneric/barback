import React from "react";

class CurrentQueueItem extends React.Component {
  constructor(props) {
    super(props);
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
      </div>
    );
  }
}

export default CurrentQueueItem;
