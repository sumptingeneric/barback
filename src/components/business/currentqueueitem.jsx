import React from "react";
import axios from "axios";

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
        `http://localhost:7337/api/customers/${custId}/orders/${orderId}/complete`
      )
      .then(() => {
        //TODO Reload not working
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
      <div className="current-order">
        <h5>Current Queue Item</h5>
        <div className="order-item">
          {this.props.order.map(item => (
            <div key={item.MenuItemId}>
              <div className="menu-item-image">
                <img src={item.MenuItem.imageUrl} alt="" />
              </div>
              <div className="menu-item-name">{item.MenuItem.name}</div>
              <div className="menu-item-quantity">
                Quantity: {item.quantity}
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => this.updateStatusToComplete(this.props.order)}>
          Done
        </button>
      </div>
    );
  }
}

export default CurrentQueueItem;
