import React from "react";
import styled from "styled-components";

const ModalTipContainer = styled.div`
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

// CSS STUFF NEEDS TO BE ADDED 
// MAYBE LARGE TOTAL UPDATING 

class Tipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // totalWithTip: 0,
    }
    this.backToCheckout = this.backToCheckout.bind(this);
    this.addPercentSubtotal = this.addPercentSubtotal.bind(this);
    this.totaler = this.totaler.bind(this);
  }

  componentDidMount() {
    this.backToCheckout()
  }

  addPercentSubtotal(percent) {
    let total = this.props.checkout;
    total += total * percent;
    console.log('total', total)
  }

  totaler() {
    this.props.checkout.drinkOrder
      .map(item => Number(item.subtotal))
      .reduce((accum, value) => accum + value, Number(0))
      .toFixed(2)
  }

  // onMouseEnter onMouseLeave

  backToCheckout() {
    console.log(this.props)
  }

  render() {
    return (
      <ModalTipContainer>
        <div>
          <h1>Tip Amount</h1>
          <span>
            <ClickableWrapper onclick={this.addPercentSubtotal(0.05)} >5%</ClickableWrapper>
            <ClickableWrapper>10%</ClickableWrapper>
            <ClickableWrapper>15%</ClickableWrapper>
          </span>
          <span>
            Total: $
            {this.props.checkout.drinkOrder
      .map(item => Number(item.subtotal))
      .reduce((accum, value) => accum + value, Number(0))
      .toFixed(2)}
          </span>
        </div>
      </ModalTipContainer>
    );
  }
}

export default Tipping;