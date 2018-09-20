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
      description: '',
      imageUrl: './default-drink-image.jpg',
    };
  }

  handleItemNameInput(event) {
    this.setState({itemName: event.target.value});
  }

  handleDescriptionInput(event) {
    this.setState({description: event.target.value});
  }

  handleImageUrlInput(event) {
    this.setState({imageUrl: event.target.value});
  }

  handleSubmit() {
    // axios post request to save new item to database
    this.props.toggleModal();
  }

  render() {
    return (
      <ModalContainer>
        <div>
          <form>
            <h2>Add a New Menu Item</h2>
            <label>Item Name</label><br />
            <input type="text" name="item-name" onChange={this.handleItemNameInput.bind(this)}/>
            <br /><br />
            <label>Description</label><br />
            <textarea rows="4" cols="50" name="description" onChange={this.handleDescriptionInput.bind(this)}/>
            <br /><br />
            <label>Image URL</label><br />
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