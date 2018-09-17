import React from 'react';
import CarouselContainer from './CarouselContainer.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import { throttle } from 'lodash';
import Swipeable from 'react-swipeable'
import Wrapper from './CarouselWrapper.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? 'prev' : 'next',
      sliding: false
    }
  }

  //method to handle mobile swiping
  handleSwipe = throttle(isNext => {
    if (isNext) {
      this.nextSlide()
    } else {
      this.prevSlide()
    }
  }, 500, { trailing: false })

  //Trigger animated state when we slide using transform in CarouselContainer
  triggerSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }


  getOrder(itemIndex) {
    const numItems = this.props.children.length || 1;

    if (itemIndex - this.state.position < 0) {
      return numItems - Math.abs(itemIndex - this.state.position)
    }

    return itemIndex - this.state.position;
  }

  nextSlide = () => {
    const numItems = this.props.children.length || 1
    this.triggerSliding('next', this.state.position === numItems - 1 ? 0 : this.state.position + 1)
  }

  prevSlide = () => {
    const numItems = this.props.children.length
    this.triggerSliding('prev', this.state.position === 0 ? numItems - 1 : this.state.position - 1)
  }

  render() {
    return (
      <div>
        <Swipeable
          onSwipingLeft={() => this.handleSwipe(true)}
          onSwipingRight={() => this.handleSwipe()}
        >
          <Wrapper>
            <CarouselContainer
              sliding={this.state.sliding}
              direction={this.state.direction}
              //Carousel behavior adjusts when searching to show results properly
              search={this.props.search}
            >
              {this.props.children.map((child, index) => (
                <CarouselSlot
                  key={index}
                  order={this.getOrder(index)}
                >{child}
                </CarouselSlot>
              ))}
            </CarouselContainer>
            <button onClick={() => this.prevSlide()}>Previous</button>
            <button onClick={() => this.nextSlide()}>Next</button>
          </Wrapper>
        </Swipeable>
      </div >
    )
  }
}

export default Carousel;