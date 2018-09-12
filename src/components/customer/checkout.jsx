import React from "react";
import ReactDOM from "react-dom";

class Checkout extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>TESTTESTs</div>,
      document.getElementById("test")
    );
  }
}

export default Checkout;
