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
      withTipTotal: 0,
    }
    this.backToCheckout = this.backToCheckout.bind(this);
    this.addPercentSubtotal = this.addPercentSubtotal.bind(this);
    this.subtractPercentSubtotal = this.subtractPercentSubtotal.bind(this);

  }

  componentDidMount() {
    this.setState({
      withTipTotal: this.props.total,
    })
  }

  addPercentSubtotal(percent) {
    let total = this.props.checkout.total;
    total += total * percent;
    this.setState({
      withTipTotal: total,
    })
  }

  subtractPercentSubtotal() {
    let total = this.props.checkout.total;
    this.setState({
      withTipTotal: total,
    })
  }

  // onMouseEnter onMouseLeave

  backToCheckout() {
    
  }

  render() {
    return (
      <ModalTipContainer>
        <div>
          <h1>Tip Amount</h1>
          <span>
            <ClickableWrapper onMouseEnter={() => this.addPercentSubtotal(0.05)} onMouseLeave={() => this.subtractPercentSubtotal()} onClick={() => {this.props.changeModal('checkout', this.props.withTipTotal), this.addPercentSubtotal(0.05)}}>5%</ClickableWrapper>
            <ClickableWrapper onMouseEnter={() => this.addPercentSubtotal(0.10)} onMouseLeave={() => this.subtractPercentSubtotal()}>10%</ClickableWrapper>
            <ClickableWrapper onMouseEnter={() => this.addPercentSubtotal(0.15)} onMouseLeave={() => this.subtractPercentSubtotal()}>15%</ClickableWrapper>
          </span>
          <span>
            Total: $
            {this.state.withTipTotal}
          </span>
        </div>
      </ModalTipContainer>
    );
  }
}

export default Tipping;