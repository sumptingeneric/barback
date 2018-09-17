import styled from 'styled-components';
const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: ${(props) => {
    //When searching, we show multiple results as a column for visibility
    if (props.search !== '') {
      return 'wrap';
    }
    return 'nowrap'
  }};
  margin: 0 0 20px 20px;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};

  transform: ${(props) => {
    //When searching, we turn off transform to show results visibly
    if (props.search !== '') {
      return 'none';
    }

    //Animation effect for swiping through carousel
    if (!props.sliding) {
      return 'translateX(calc(-80% - 20px))'
    }
    if (props.direction === 'prev') {
      return 'translateX(calc(2 * (-80% - 20px)))'
    }
    return 'translateX(0%)'
  }};

  & > div {
    margin: 20px 0; 
  }
`
export default CarouselContainer