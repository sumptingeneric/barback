import React from "react";
import styled from "styled-components";
import axios from "axios";

const ModalContainer = styled.div`
  background-color: white;
  width: 350px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;
const ClickableWrapper = styled.button`
  margin: 3px;
  width: 30%;
  font-size: 0.8em;
`;

class AddMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      price: '',
      description: '',
      imageUrl: './default-drink-image.jpg',
    };
  }

  handleItemNameInput(event) {
    this.setState({itemName: event.target.value});
  }

  handlePriceInput(event) {
    this.setState({price: event.target.value});
  }

  handleDescriptionInput(event) {
    this.setState({description: event.target.value});
  }

  handleImageUrlInput(event) {
    this.setState({imageUrl: event.target.value});
  }

  handleSubmit() {
    console.log('save', this.state);
    // axios post request to save new item to database
    axios.post('/api/bar/menu/add', {item: this.state})
    // axios.post(`http://${process.env.HOST}:${process.env.PORT}/api/bar/menu/add/${this.state}`)
      .then(res => {
        //need to refresh the editmenu page with new item
        console.log(res);
      })
      .catch(err => console.log(err));

    this.props.toggleModal();
  }

  render() {
    return (
      <ModalContainer>
        <div>
          <form>
            <h2>Add a New Menu Item</h2>
            <p>Item Name</p><br />
            <input type="text" name="item-name" onChange={this.handleItemNameInput.bind(this)}/>
            <br /><br />
            <p>Price</p><br />
            <input type="text" name="price" onChange={this.handlePriceInput.bind(this)}/>
            <br /><br />
            <p>Description</p><br />
            <textarea rows="4" cols="100%" name="description" onChange={this.handleDescriptionInput.bind(this)}/>
            <br /><br />
            <p>Image URL</p><br />
            <input type="text" name="image-url" onChange={this.handleImageUrlInput.bind(this)}/>
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

export default AddMenuItem;