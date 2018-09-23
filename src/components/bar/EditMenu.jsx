import React from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "./modal.jsx";
import AddMenuItem from "./AddMenuItem.jsx";
import EditMenuItem from "./EditMenuItem.jsx";

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

const ItemWrapper = styled.main`
  width: 50%;
  margin-bottom: 10px; 
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
      menuItems: [],
      displayItems: [],
      clickedItem: '',
    };
  }

  componentDidMount() {
    // axios call for menu items in database
    axios.get('/api/bar/menu')
      .then( res => {
        const items = res.data;
        this.setState({
          menuItems: items,
          totalItems: items.length,
          displayItems: items,
        });
      })
      .catch( err => console.error(err));
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

  handleDelete(item) {
    //axios request send id and delete
    axios.delete('/api/bar/menu/delete', {params: {id: item.id}})
      .then(() => {
        console.log('deleted');
        this.componentDidMount();
      })
      .catch((err) => console.log(err.response));
  }

  handleSearchOnKeyUp = (e) => {
    if (e.key !== "Enter") {
      this.setState({
        search: (e.target.value).toLowerCase()
      },
        //then update displayItems to match search
        () => {
          let searchResults = this.state.menuItems.filter(item => {
            return item.name.toLowerCase().includes(this.state.search) 
              || item.category.toLowerCase().includes(this.state.search)
              || item.description.toLowerCase().includes(this.state.search);
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
          <button name="add" onClick={this.handleAdd.bind(this)}>Add New Menu Item</button>
          <button name="add" onClick={this.componentDidMount.bind(this)}>Refresh</button>
          <input placeholder="search for menu item..." onKeyUp={this.handleSearchOnKeyUp} />
          <h3>Total Menu Items: {this.state.totalItems}</h3>
          {this.state.displayItems.map(item => {
            return (
              <ItemWrapper key={item.id}>
                <Image src={item.imageUrl} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.category} - {'$' + item.price}
                <br/>
                {item.description}</p>
                <button type="button" name="edit" onClick={this.handleEdit.bind(this, item)}>Edit {item.name}</button>
                <button type="button" name="delete" onClick={this.handleDelete.bind(this, item)}>Delete</button>

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