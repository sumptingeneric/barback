import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.completeOrder = this.completeOrder.bind(this);
  }

  completeOrder() {
    console.log("Order SUBMitTED TO DB");
    let custId = 3;
    let checkoutOrder = this.props.checkout;
    axios
      .post(
        `http://localhost:7337/api/customers/${custId}/orders`,
        checkoutOrder
      )
      .then(() => this.props.changeModal(""));
  }

  render() {
    return ReactDOM.createPortal(
      <div>
        <div>
          <h2>Checkout</h2>
          <div>Your Orders:</div>
          {this.props.checkout.drinkOrder.map(drink => {
            return (
              <li key={drink.item_id}>
                <img src={drink.menuItemUrl} />
                <div>
                  <span>{drink.menuItemName}</span>
                  <span>{drink.quantity}</span>
                  <span>${drink.subtotal}</span>
                </div>
              </li>
            );
          })}
          <div>
            {" "}
            Total: $
            {this.props.checkout.drinkOrder
              .map(item => item.subtotal)
              .reduce((accum, value) => accum + value)}
          </div>
          <button onClick={this.completeOrder}>Submit Order</button>
        </div>

        <div>
          <button onClick={() => this.props.changeModal("")}>
            Return to Menu
          </button>
        </div>
      </div>,
      document.getElementById("test")
    );
  }
}

export default Checkout;
// Checkout Component
//   - receives state from App / Home page(checkout state; running subtotal, complete order function)

// Function:
// Event handler: return to menu
// Event handler: calls complete order function, sets checkout state to empty
// Render:
// < list of order items>
//   <total {obtained from checkout state}>
// <back to menu button onClick=returnToMenuEventHandler>
//     <complete order button onClick=completeOrderEventHandler>
