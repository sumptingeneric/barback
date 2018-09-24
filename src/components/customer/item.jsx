import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: white;
  width: 350px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;
const ClickableWrapper = styled.button`
  margin: 3px;
  width: 30%;
  font-size: 0.8em;
`;
const Image = styled.img`
  margin: 3px;
  width: 70%;
`;
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      subtotal: Number(this.props.item.price),
      menuItemId: this.props.item.id,
      menuItemUrl: this.props.item.imageUrl,
      menuItemName: this.props.item.name
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  addOne(e) {
    e.preventDefault();
    let curQuantity = this.state.quantity;
    let curSubTot = this.state.subtotal;
    let price = Number(this.props.item.price).toFixed(2);
    this.setState({
      quantity: curQuantity + 1,
      subtotal: Number((Number(curSubTot) + Number(price)).toFixed(2))
    });
  }

  minusOne(e) {
    e.preventDefault();
    let curQuantity = this.state.quantity;
    let curSubTot = this.state.subtotal;
    let price = Number(this.props.item.price).toFixed(2);

    if (curQuantity > 1) {
      this.setState({
        quantity: curQuantity - 1,
        subtotal: Number(Number(curSubTot) - Number(price))
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.checkOutUpdate(this.state);
    this.props.returnToMenu();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <ModalContainer>
        <div className="item-details">
          <form onSubmit={this.handleSubmit}>
            <h4>{this.props.item.name}</h4>
            <Image src={this.props.item.imageUrl} alt={this.props.item.name} />
            <div className="description">{this.props.item.description}</div>
            <div>Price: ${Number(this.props.item.price).toFixed(2)}</div>
            <div className="select-quantity">
              <label className="label">Quantity: {this.state.quantity} </label>
              <button onClick={this.addOne}>+</button>
              <button onClick={this.minusOne}>-</button>
            </div>

            <ClickableWrapper
              type="submit"
              value="Submit"
              className="button is-primary"
            >
              Add to Order
            </ClickableWrapper>
          </form>
        </div>
        <ClickableWrapper id="back-to-menu" onClick={this.props.returnToMenu}>
          Back to Menu
        </ClickableWrapper>
      </ModalContainer>
    );
  }
}

export default Item;
