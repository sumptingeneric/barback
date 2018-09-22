import React from "react";
import styled from "styled-components";
import axios from "axios";

const ModalContainer = styled.div`
  background-color: white;
  width: 350px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  line-height: 8px;
`;

const ClickableWrapper = styled.button`
  margin: 3px;
  width: 30%;
  font-size: 0.8em;
`;

class EditMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedName: '',
      updatedCategory: '',
      updatedPrice: '',
      updatedDescription: '',
      updatedImageUrl: '',
    };
  }

  handleNameInput(event) {
    this.setState({updatedName: event.target.value});
  }

  handleCategoryInput(event) {
    this.setState({category: event.target.value});
  }

  handlePriceInput(event) {
    this.setState({updatedPrice: event.target.value});
  }

  handleDescriptionInput(event) {
    this.setState({updatedDescription: event.target.value});
  }

  handleImageUrlInput(event) {
    this.setState({updatedImageUrl: event.target.value});
  }

  handleSubmit() {
    // axios put request to update item to database
    //TODO: if an item was updated, add it to the put URL
    const id = this.props.item.id;
    console.log('id: ', id);
    const item = {name: 'test name'};
    axios.put('/api/bar/menu/edit', {id: id, item: item})
      .then(res => {
        //need to refresh the editmenu page with updated item
        console.log(res);
      })
      .catch(err => console.log(err));

    this.props.toggleModal();
  }

  render() {
    const item = this.props.menuItem;
    return (
      <ModalContainer>
        <div>
          <form>
            <h2>Edit Menu Item</h2>
            Item Name<br />
            <input 
              type="text"
              name="item-name"
              defaultValue={item.name}
              onChange={this.handleNameInput.bind(this)} />
            <br /><br />
            Category<br />
            <input 
              type="text"
              name="category"
              defaultValue={item.category}
              onChange={this.handleCategoryInput.bind(this)} />
            <br /><br />
            Price<br />
            <input 
              type="text"
              name="price"
              defaultValue={item.price}
              onChange={this.handlePriceInput.bind(this)} />
            <br /><br />
            Description<br />
            <textarea 
              rows="4"
              cols="100%"
              name="description"
              defaultValue={item.description}
              onChange={this.handleDescriptionInput.bind(this)} />
            <br /><br />
            Image URL<br />
            <input 
              type="text"
              name="image-url"
              defaultValue={item.imageUrl}
              onChange={this.handleImageUrlInput.bind(this)} />
            <br /><br />
            <ClickableWrapper type="submit" onClick={this.handleSubmit.bind(this)}>
              Save Item
            </ClickableWrapper>
          </form>
          <ClickableWrapper onClick={() => this.props.toggleModal()}>
            Exit
          </ClickableWrapper>
        </div>
      </ModalContainer>
    );
  }
}

export default EditMenuItem;