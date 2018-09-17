import React from "react";
import styled from "styled-components";

// styled components for css styling
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  height: 200px;
`;
class PrevOrderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="order-item">
        <Container>
          <div key={this.props.order.OrderId}>
            <div className="menu-item-image">
              <Image src={this.props.order.MenuItem.imageUrl} />
            </div>
            <div className="menu-item-name">Menu Item Name</div>
            <div className="menu-item-quantity">
              Quantity: {this.props.order.quantity}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default PrevOrderItem;
