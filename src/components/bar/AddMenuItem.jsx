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

class AddMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      description: '',
      imageUrl: './default-drink-image.jpg',
    };
  }

  handleNameInput(event) {
    this.setState({name: event.target.value});
  }

  handleCategoryInput(event) {
    this.setState({category: event.target.value});
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
    const item = this.state;
    console.log('sate of items', item);
    // axios post request to save new item to database
    axios.post(`http://${process.env.HOST}:${process.env.PORT}/api/bar/menu/add/${ item }`)
      .then(res => {
        //need to refresh the editmenu page with new item
        console.log('res in handleSubmit', res);
      })
      .catch(err => console.error(err));

    this.props.toggleModal();
  }

  render() {
    return (
      <ModalContainer>
        <div>
          <form>
            <h2>Add a New Menu Item</h2>
            Item Name<br />
            <input type="text" name="item-name" onChange={this.handleNameInput.bind(this)}/>
            <br /><br />
            Category<br />
            <input type="text" name="category" onChange={this.handleCategoryInput.bind(this)}/>
            <br /><br />
            Price<br />
            <input type="text" name="price" onChange={this.handlePriceInput.bind(this)}/>
            <br /><br />
            Description<br />
            <textarea rows="4" cols="100%" name="description" onChange={this.handleDescriptionInput.bind(this)}/>
            <br /><br />
            Image URL<br />
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