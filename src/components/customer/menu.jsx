import React from "react";
import Item from "./item.jsx";

// test data... will delete after figuring out the props passed down.

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDrink: ""
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleReturnToMenu = this.handleReturnToMenu.bind(this);
  }

  // temp function for modal display... will switch to react portals
  handleItemClick(drink) {
    this.setState({
      selectDrink: drink
    });
  }

  handleReturnToMenu() {
    this.setState({
      selectDrink: ""
    });
  }

  // render each category
  renderCategory(category, index) {
    return (
      <div key={index} id={category}>
        <h2>{category}</h2>
        {this.props.menuItems[category].map((drink, index) => {
          return this.renderDrink(drink, index);
        })}
      </div>
    );
  }

  // render each drink
  renderDrink(drink, index) {
    return (
      <div key={index}>
        <button onClick={() => this.handleItemClick(drink.name)}>
          {drink.name}
        </button>
        {this.state.selectDrink === drink.name && (
          <Item
            item={drink}
            checkOutUpdate={this.props.checkOutUpdate}
            returnToMenu={this.handleReturnToMenu}
          />
        )}
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
