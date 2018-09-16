import React from 'react';

class Carousel extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    )
  }
}

export default Carousel;