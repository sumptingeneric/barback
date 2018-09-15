import React from "react";
import Item from "./item.jsx";
import Modal from "./Modal.jsx";
import styled from "styled-components";

// styled components for css styling
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
  }

  // set state of selected drink to drink name
  handleItemClick(drink) {
    this.setState({
      selectDrink: drink
    });
    this.toggleModal();
  }

  // set state of toggling modal on or off
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  // render each category
  // dirty search... show drinks based on search (may change later...)
  renderCategory(category, index) {
    return (
      <div key={index} id={category}>
        <h2>{category}</h2>
        <Container>
          {this.props.menuItems[category]
            .filter(drink => {
              return drink.name.toLowerCase().includes(this.props.search);
            })
            .map(drink => {
              return this.renderDrink(drink);
            })}
        </Container>
      </div>
    );
  }

  // render each drink
  renderDrink(drink) {
    return (
      <div key={drink.id}>
        <ClickableWrapper onClick={() => this.handleItemClick(drink)}>
          <Image alt={drink.name} src={drink.imageUrl} />
          <div>{drink.name}</div>
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
