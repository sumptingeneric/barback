import React from "react";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
  bottom-margin: 10px;
`;

const Staff = styled.ul`
  font-size: 22px;
  line-height: 30px;
`;

class BarStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      bartenders: [
        {id: '1', name: 'Cliff Fall'}, 
        {id: '2', name: 'Rex Rino'}, 
        {id: '3', name: 'Regina Magina'}
      ],
    };
  }

  onComponentDidMount() {
    //axios request to get bartender names
    axios.get('/bar/staff')
      .then((data) => {
        this.setState({bartenders: data});
      });
  }

  render() {
    const bar = this.props.barInfo;
    return (
      <Wrapper>
        <h1>Bartenders</h1>
        <Staff>
        {this.state.bartenders.map((bartender) => {
          return (
            <li key={bartender.id}>{bartender.name}</li>
          )
        })}
        </Staff>
      </Wrapper>
    );
  }
  
};

export default BarStaff;