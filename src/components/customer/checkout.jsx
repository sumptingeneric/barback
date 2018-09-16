import React from "react";
import axios from "axios";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: white;
  max-width: 500px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;

const Image = styled.img`
  height: 50px;
`;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.completeOrder = this.completeOrder.bind(this);
  }

  completeOrder() {
    //console.log("Order SUBMitTED TO DB");
    let custId = 1;
    let checkoutOrder = this.props.checkout;
    axios
      .post(
        `http://localhost:7337/api/customers/${custId}/orders`,
        checkoutOrder
      )
      .then(() => {
        this.props.getOrders();
        this.props.changeModal("");
        this.props.emptyCart();
      });
  }

  render() {
    return (
      <ModalContainer>
        <div>
          <h2>Checkout</h2>
          <div>Your Order:</div>
          {this.props.checkout.drinkOrder.map(drink => {
            return (
              <li key={drink.menuItemId}>
                <Image src={drink.menuItemUrl} alt={drink.menuItemName} />
                <div>
                  <span>{drink.menuItemName}</span>
                  <span>{drink.quantity}</span>
                  <span>${drink.subtotal.toFixed(2)}</span>
                </div>
              </li>
            );
          })}
          <div>
            {" "}
            Total: $
            {this.props.checkout.drinkOrder
              .map(item => Number(item.subtotal))
              .reduce((accum, value) => accum + value, Number(0))
              .toFixed(2)}
          </div>
          <button onClick={this.completeOrder}>Submit Order</button>
        </div>

        <div>
          <div>
            <button onClick={() => this.props.emptyCart()}>Empty Cart</button>
          </div>
          <button onClick={() => this.props.changeModal("")}>
            Return to Menu
          </button>
        </div>
      </ModalContainer>
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
