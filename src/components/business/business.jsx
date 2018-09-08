import React from "react";
import Queue from "./queue.jsx";
import PreviousOrder from "./prevorder.jsx";

class Business extends React.Component {
  state = {
    active: {},
    queue: [],
    complete: []
  };

  render() {
    return (
      <div>
        <h1>Business View</h1>
        <Queue />
        <PreviousOrder />
      </div>
    );
  }
}

export default Business;
