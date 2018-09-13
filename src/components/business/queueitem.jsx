import React from "react";

class CurrentQueueItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="queue-item">
        <h5>Current Queue Item</h5>
        <div className="order-item">
          {this.props.order.map(item => {
            return (
              <div key={item.MenuItemId}>
                <span>Image Here</span>
              </div>
            );
          })}
        </div>      
      </div>
    );
  }
}

export default CurrentQueueItem;
