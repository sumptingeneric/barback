import React from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "./modal.jsx";
import AddMenuItem from "./AddMenuItem.jsx";
import EditMenuItem from "./EditMenuItem.jsx";
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
      modalType: '',
      search: '',
      totalItems: 0,
      menuItems: [{id:'1', itemName:'Surprise Me!', price: '$10', description: 'Want the bartenders favorite drink? Choose this drink for a nice surprise!', imageUrl: 'https://i2-prod.mirror.co.uk/incoming/article11471438.ece/ALTERNATES/s615/PROD-Range-of-different-alcoholic-drinks-in-a-row.jpg' }],
      displayItems: [],
      clickedItem: '',
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
      showModal: !this.state.showModal, 
    });
  };

  handleAdd(event) {
    this.setState({
      modalType: event.target.name,
    }, () => this.toggleModal());
  }

  handleEdit(item, event) {
    this.setState({
      clickedItem: item,
      modalType: event.target.name,
    }, () => this.toggleModal());
  }

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
    let modalDisplay;
    if (this.state.showModal && this.state.modalType === 'add') {
      modalDisplay = <AddMenuItem toggleModal={this.toggleModal.bind(this)} />;
    } else {
      modalDisplay = 
        <EditMenuItem menuItem={this.state.clickedItem} toggleModal={this.toggleModal.bind(this)} />
    }
  
    return (
      <div>
        <Wrapper>
          <h1>Edit Menu</h1>
          <p>{this.state.totalItems} items currently on your menu</p>
          <button name="add" onClick={this.handleAdd.bind(this)}>Add New Menu Item</button>
          <Search handleSearch={this.handleSearchOnKeyUp}/>

          <h3>Your Menu Items</h3>
          {this.state.menuItems.map(item => {
            return (
              <ItemWrapper key={item.id}>
                <Image src={item.imageUrl} alt={item.itemName} />
                <h4>{item.itemName}</h4>
                <p>{item.price} - {item.description}</p>
                <button type="button" name="edit" onClick={this.handleEdit.bind(this, item)}>Edit {item.itemName}</button>
              </ItemWrapper>
            );
          })}
        </Wrapper>

        {this.state.showModal ? (
          <Modal>
            {modalDisplay}
          </Modal>
          ) : null
        }

      </div>
    );
  }

};

export default EditMenu;