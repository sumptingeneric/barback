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
  font-size: 1em;
`;

const TotalContainer = styled.div`
  font-size: 2.5em;
`;


class Tipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withTipTotal: 0,
      tipAmount: 0,
    }
    this.clickerHandler = this.clickerHandler.bind(this);
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
    let tip = total * percent
    total = total + tip;
    total = total.toFixed(2);
    this.setState({
      withTipTotal: total,
      tipAmount: tip,
    })
  }

  subtractPercentSubtotal() {
    let total = this.props.checkout.total;
    this.setState({
      withTipTotal: total,
    })
  }

  clickerHandler() {
    
  }

  render() {
    return (
      <ModalTipContainer>
        <div>
          <h2>Tip Amount</h2>
          <p>${this.state.tipAmount.toFixed(2)}</p>
          <TotalContainer>
            Total: $
            {this.state.withTipTotal}
          </TotalContainer>
          <div>
            <div>
              <ClickableWrapper onMouseEnter={() => this.addPercentSubtotal(0.05)} onMouseLeave={() => this.subtractPercentSubtotal()} onClick={() => {this.props.updateTotal('checkout', this.state.withTipTotal), this.addPercentSubtotal(0.05)}}>5%</ClickableWrapper>
            </div>
            <div>
              <ClickableWrapper onMouseEnter={() => this.addPercentSubtotal(0.10)} onMouseLeave={() => this.subtractPercentSubtotal()} onClick={() => {this.props.updateTotal('checkout', this.state.withTipTotal), this.addPercentSubtotal(0.10)}}>10%</ClickableWrapper>
            </div>
            <div>
              <ClickableWrapper onMouseEnter={() => this.addPercentSubtotal(0.15)} onMouseLeave={() => this.subtractPercentSubtotal()} onClick={() => {this.props.updateTotal('checkout', this.state.withTipTotal), this.addPercentSubtotal(0.15)}}>15%</ClickableWrapper>
            </div>
          </div>
        </div>
      </ModalTipContainer>
    );
  }
}

export default Tipping;