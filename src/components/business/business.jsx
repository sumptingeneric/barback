import React from "react";
import Queue from "./queue.jsx";
import PreviousOrders from "./prevorders.jsx";

class Business extends React.Component {
  state = {
    view: "queue"
  };

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "queue") {
      return <Queue />;
    } else {
      return <PreviousOrders />;
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeView("queue")}>Queue</button>
        <button onClick={() => this.changeView("prev")}>Previous Orders</button>
        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

export default Business;
