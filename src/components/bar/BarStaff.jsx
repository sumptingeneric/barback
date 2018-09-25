import React from "react";
import styled from "styled-components";
import axios from "axios"

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
      bartenders: [],
    };
  }

  componentDidMount() {
    //axios request to get staff list
    axios.get('/bar/staff')
      .then((data) => {
        var staffData = data.data;
        this.setState({bartenders: staffData});
      });
  }

  render() {
    const bar = this.props.barInfo;
    return (
      <Wrapper>
        <h1>Bartenders at {bar.barName}</h1>
        <Staff>
        {this.state.bartenders.map((bartender) => {
          return (
            <li key={bartender.id}>{bartender.username}</li>
          )
        })}
        </Staff>
      </Wrapper>
    );
  }
  
};

export default BarStaff;