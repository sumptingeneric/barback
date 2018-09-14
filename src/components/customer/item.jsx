//maybe switch <h4>props.name to <label>props.name?
//     <add to cart option onClick= add item to cart (item, quantity, subtotal)>
//back to menu button needs to send back to menu
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";


//Styled Components
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
      quantity: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  addOne(e) {
    e.preventDefault();
    let current = this.state.quantity;
    this.setState({
      quantity: current + 1
    });
  }

  minusOne(e) {
    e.preventDefault();
    if (this.state.quantity > 0) {
      let current = this.state.quantity;
      this.setState({
        quantity: current - 1
      });
    }
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
    return ReactDOM.createPortal(
      <ModalContainer>
        <div className="item-details">
          <form>
            <h4>{this.props.item.item}</h4>
            <img src={this.props.item.image_url} alt={"Item"} />
            <div className="description">{this.props.item.description}</div>
            <div>Price: ${Number(this.props.item.price).toFixed(2)}</div>
            <div className="select-quantity">
              <label className="label">Quantity: {this.state.quantity} </label>
              <button onClick={this.addOne}>+</button>
              <button onClick={this.minusOne}>-</button>
            </div>
            <input type="submit" value="Submit" className="button is-primary" />
          </form>
        </div>
        <button id="back-to-menu" onClick={this.props.returnToMenu}>
          Back to Menu
        </button>
      </ModalContainer>,
      document.getElementById("modal")
    );
  }
}

export default Item;
