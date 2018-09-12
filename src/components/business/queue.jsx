import React from "react";
import QueueItem from "./queueitem";

class Queue extends React.Component {
  render() {
    return (
      <div>
        <h2>Queue</h2>
        <QueueItem />
      </div>
    );
  }
}

export default Queue;
