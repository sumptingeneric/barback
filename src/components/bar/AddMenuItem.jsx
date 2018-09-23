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
      category: '',
      price: '',
      description: '',
      imageUrl: './default-drink-image.jpg',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const value = event.target.value;
    const field = event.target.name;
    this.setState({[field]: value});
  }

  handleSubmit() {
    const item = this.state;
    // axios post request to save new item to database
    axios.post('/api/bar/menu/add', {item: item})
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
            <input 
              type="text" 
              name="name" 
              onChange={this.handleInput}/>
            <br /><br />
            Category<br />
            <input 
              type="text" 
              name="category" 
              onChange={this.handleInput}/>
            <br /><br />
            Price<br />
            $ <input 
              type="text" 
              name="price" 
              onChange={this.handleInput}/>
            <br /><br />
            Description<br />
            <textarea 
              rows="4" 
              cols="100%" 
              name="description" 
              onChange={this.handleInput}/>
            <br /><br />
            Image URL<br />
            <input 
              type="text" 
              name="imageUrl" 
              onChange={this.handleInput}/>
            <br /><br />
            <ClickableWrapper type="submit" onClick={this.handleSubmit}>
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