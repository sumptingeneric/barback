import React from 'react';

import CarouselContainer from './CarouselContainer.jsx';
import Wrapper from './CarouselWrapper.jsx';
import CarouselSlot from './CarouselSlot.jsx';

class Carousel extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <Wrapper>
          <CarouselContainer>
            {children.map((child, index) => (
              <CarouselSlot
                key={index}
              >{child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>
      </div>
    )
  }
}

export default Carousel;