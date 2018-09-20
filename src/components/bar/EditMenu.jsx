import React from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "../customer/modal.jsx";
import AddMenuItem from "./AddMenuItem.jsx";
import Search from "../customer/search.jsx";

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

const ItemWrapper = styled.main`
  text-align: center;
`;
const Image = styled.img`
  height: 200px;
`;

class EditMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      search: '',
      totalItems: 0,
      menuItems: [{id:'1', itemName:'Surprise Me!', price: '$10', description: 'Want the bartenders favorite drink? Choose this drink for a nice surprise!', imageUrl: 'https://i2-prod.mirror.co.uk/incoming/article11471438.ece/ALTERNATES/s615/PROD-Range-of-different-alcoholic-drinks-in-a-row.jpg' }],
      displayItems: [],
    };
  }

  componentDidMount() {
    // axios call for menu items in database

    //make this a promise or callback:
    this.setState({
      totalItems: this.state.menuItems.length,
      displayItems: this.state.menuItems,
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handleSearchOnKeyUp = e => {
    if (e.key !== "Enter") {
      this.setState({
        search: (e.target.value).toLowerCase()
      },
        //then update displayItems to match search
        () => {
          let searchResults = this.state.menuItems.filter(item => {
            return item.itemName.toLowerCase().includes(this.state.search);
          });
          this.setState({displayItems: searchResults});
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Wrapper>
          <h1>Edit Menu</h1>
          <p>{this.state.totalItems} items currently on your menu</p>
          <button onClick={this.toggleModal.bind(this)}>Add New Menu Item</button>
          <Search handleSearch={this.handleSearchOnKeyUp}/>

          <h3>Your Menu Items</h3>
          {this.state.menuItems.map(item => {
            return (
              <ItemWrapper key={item.id}>
                <Image src={item.imageUrl} alt={item.itemName} />
                <h4>{item.itemName}</h4>
                <p>{item.price} - {item.description}</p>
              </ItemWrapper>
            );
          })}

        </Wrapper>
        {this.state.showModal ? (
          <Modal>
            <AddMenuItem toggleModal={this.toggleModal.bind(this)} />
          </Modal>
        ) : null}
      </div>
    );
  }

};

export default EditMenu;