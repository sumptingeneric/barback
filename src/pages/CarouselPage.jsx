import React from 'react';
import styled from 'styled-components';

import Carousel from '../components/customer/Carousel.jsx';

const Item = styled.div`
  background: darkorange; 
  text-align: center; 
  padding: 50px;
  color: white; 
`;

export default class CarouselPage extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          title="Carousel"
        >
          <Item>Item 0</Item>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Carousel>
      </div>
    )
  }
}