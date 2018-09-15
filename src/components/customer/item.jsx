//maybe switch <h4>props.name to <label>props.name?
//     <add to cart option onClick= add item to cart (item, quantity, subtotal)>
//back to menu button needs to send back to menu
import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: white;
  max-width: 500px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
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
      subtotal: Number(curSubTot) + Number(price)
    });
    //console.log(this.state);
  }

  minusOne(e) {
    e.preventDefault();
    let curQuantity = this.state.quantity;
    let curSubTot = this.state.subtotal;
    let price = Number(this.props.item.price).toFixed(2);

    if (curQuantity > 1) {
      this.setState({
        quantity: curQuantity - 1,
        subtotal: Number(curSubTot) - Number(price)
      });
    }
    //console.log(this.state);
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
            <h4>{this.props.item.item}</h4>
            <img src={this.props.item.imageUrl} alt={"Item"} />
            <div className="description">{this.props.item.description}</div>
            <div>Price: ${Number(this.props.item.price).toFixed(2)}</div>
            <div className="select-quantity">
              <label className="label">Quantity: {this.state.quantity} </label>
              <button onClick={this.addOne}>+</button>
              <button onClick={this.minusOne}>-</button>
            </div>

            <button type="submit" value="Submit" className="button is-primary">
              Submit
            </button>
          </form>
        </div>
        <button id="back-to-menu" onClick={this.props.returnToMenu}>
          Back to Menu
        </button>
      </ModalContainer>
    );
  }
}

export default Item;
