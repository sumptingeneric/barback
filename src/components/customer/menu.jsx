import React from "react";
import Item from './item.jsx';

class Menu extends React.Component {

  render() {
    return (
      <div>
        <h3>Menu</h3>
        <Item />
      </div>
    );
  }
}

export default Menu;