import React from "react";
import Item from "./item.jsx";
import Modal from "./Modal.jsx";
import styled from "styled-components";

// test data... will delete after figuring out the props passed down.
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ClickableWrapper = styled.button`
  border: none;
`;
const Image = styled.img`
  height: 200px;
`;
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectDrink: ""
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // temp function for modal display... will switch to react portals
  handleItemClick(drink) {
    this.setState({
      selectDrink: drink
    });
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  // render each category
  renderCategory(category, index) {
    return (
      <div key={index} id={category}>
        <h2>{category}</h2>
        <Container>
          {this.props.menuItems[category].map((drink, index) => {
            return this.renderDrink(drink, index);
          })}
        </Container>
      </div>
    );
  }

  // render each drink
  renderDrink(drink) {
    return (
      <div key={drink.item_id}>
        <ClickableWrapper onClick={() => this.handleItemClick(drink)}>
          <Image alt={drink.item} src={drink.imageUrl} />
          <div>{drink.item}</div>
          <div>${drink.price}</div>
        </ClickableWrapper>

        {this.state.showModal && this.state.selectDrink === drink ? (
          <Modal>
            <Item
              item={drink}
              checkOutUpdate={this.props.checkOutUpdate}
              returnToMenu={this.toggleModal}
            />
          </Modal>
        ) : null}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
        {Object.keys(this.props.menuItems).map((category, index) => {
          return this.renderCategory(category, index);
        })}
      </div>
    );
  }
}

export default Menu;
