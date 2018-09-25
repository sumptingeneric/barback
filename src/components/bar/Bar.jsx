import React from "react";
import { Link } from "@reach/router";
import BarStats from "./BarStats.jsx";

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const barInfo = this.props.barInfo;
    return (
      <div>
        <h1>{barInfo.barName}</h1>
        <Link to="/bar/staff">View Bar Staff</Link>
        <Link to="/bar/menu">Edit Menu</Link>
        <BarStats />
      </div>
    );
  }

};

export default Bar;