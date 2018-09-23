import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  margin: 20px;
`;

const Hr = styled.hr`
  width: 50%;
`;

const ModalContainer = styled.div`
  background-color: white;
  min-width: 350px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  overflow: scroll;
  overflow-x: hide;
  max-height: 600px;
`;
const ClickableWrapper = styled.button`
  margin: 3px;
  width: 40%;
  font-size: 0.8em;
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
    
    // TODO: need to has customer ID not hard coded 
    let custId = 1;
    let checkoutOrder = this.props.checkout;
    axios
      .post(
        `/api/customers/${custId}/orders`,
        checkoutOrder
      )
      .then((res) => {
        console.log('checkout.jsx, res=', res);
        this.props.getOrders();
        this.props.changeModal("");
        this.props.emptyCart();
        this.props.getSurvey();
      });
  }


  render() {
    return (
      <ModalContainer>
        <div>
          <h1>Checkout</h1>
          {/* <div>Your Order:</div> */}
          {this.props.checkout.drinkOrder.map(drink => {
            return (
              <div key={drink.menuItemId}>
                <Div>
                  <Image src={drink.menuItemUrl} alt={drink.menuItemName} />
                  <div>
                    <span>{drink.menuItemName} - </span>
                    <span>QTY: {drink.quantity} - </span>
                    <span>${drink.subtotal.toFixed(2)}</span>
                  </div>
                </Div>
                <Hr />
              </div>
            );
          })}
          <div>
            {" "}
            <h2>
              Total: $
              {this.props.checkout.total}
            </h2>
          </div>
          <ClickableWrapper onClick={this.completeOrder}>
            Submit Order
          </ClickableWrapper>
        </div>
        {/* <br /> */}

        <div>
          <div>
            <ClickableWrapper onClick={() => {this.props.changeModal("tipping")}}>
              Tip
            </ClickableWrapper>
          </div>
          <div>
            <ClickableWrapper onClick={() => this.props.emptyCart()}>
              Empty Cart
            </ClickableWrapper>
          </div>
          {/* <br /> */}
          <ClickableWrapper onClick={() => this.props.changeModal("")}>
            Return to Menu
          </ClickableWrapper>
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
