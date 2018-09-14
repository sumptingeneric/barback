import React from "react";
import Item from "./item.jsx";
import Modal from "./Modal.jsx";
import styled from "styled-components";

// test data... will delete after figuring out the props passed down.
let dummyMenuPayload = {
  cocktails: [
    {
      item_id: 1,
      item: "Hailey's Commit",
      price: 9.5,
      description: "This is Hailey's Drink",
      image_url: "/images/cocktails/haileyscommit.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    },
    {
      item_id: 4,
      item: "Rockin' Robin",
      price: 11.25,
      description: "This is Robin's Drink",
      image_url: "/images/cocktails/rockinrobin.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    },
    {
      item_id: 5,
      item: "Erwin's Elixir",
      price: 11.25,
      description: "This is Erwin's favorite libation.",
      image_url: "/images/cocktails/erwinselixr.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    },
    {
      item_id: 6,
      item: "Rockin' Robin",
      price: 11.25,
      description: "This is Robin's Drink",
      image_url: "/images/cocktails/rockinrobin.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    }
  ],
  beers: [
    {
      item_id: 2,
      item: "Budlite",
      price: 2.5,
      description: "This is Budlite",
      image_url: "/images/beers/budlite.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    },
    {
      item_id: 6,
      item: "Leffe",
      price: 15.25,
      description: "This is Leffe",
      image_url: "/images/beers/leffe.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    }
  ]
};

//Styled Components
const Container = styled.div`
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap; 
`;

const ClickableWrapper = styled.button`
  border: none; 
`;

const Image = styled.img`
  height: 200px; 
`;


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectDrink: ""
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // temp function for modal display... will switch to react portals
  handleItemClick(drink) {
    this.setState({
      selectDrink: drink
    });

    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  // render each category
  renderCategory(category, index) {
    return (
      <div key={index} id={category}>
        <h2>{category}</h2>
        <Container>
          {dummyMenuPayload[category].map((drink) => {
            return this.renderDrink(drink);
          })}
        </Container>
      </div>
    );
  }

  // render each drink
  renderDrink(drink) {
    return (
      <div >
        <ClickableWrapper onClick={() => this.handleItemClick(drink)}>
          <Image alt={drink.item} src={drink.image_url} />
          <div>{drink.item}</div>
          <div>${drink.price}</div>
        </ClickableWrapper>

        {this.state.showModal && this.state.selectDrink === drink ? (
          <Modal>
            <Item item={drink} returnToMenu={this.toggleModal} />
          </Modal>
        ) : null}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
        {Object.keys(dummyMenuPayload).map((category, index) => {
          return this.renderCategory(category, index);
        })}
      </div>
    );
  }
}

export default Menu;
