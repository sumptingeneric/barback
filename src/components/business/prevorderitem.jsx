import React from "react";

class PrevOrderItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="order-item">
        <div key={this.props.order.OrderId}>
          <div className="menu-item-image">Image</div>
          <div className="menu-item-name">Menu Item Name</div>
          <div className="menu-item-quantity">Quantity: {this.props.order.quantity}</div>
        </div>
      </div>
    );
  }
}

export default PrevOrderItem;
