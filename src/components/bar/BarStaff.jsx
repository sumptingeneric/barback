import React from "react";
import styled from "styled-components";
// import axios from "axios"

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
        {id: '1', name: 'Dwight Schrute'}, 
        {id: '2', name: 'Jim Halpert'}, 
        {id: '3', name: 'Pam Beesly'}, 
        {id: '4', name: 'Michael Scott'},
      ],
    };
  }

  onComponentDidMount() {
    //axios request to get bartender names

    //TODO: UNCOMMENT ONCE BARTENDER TABLE IN DB IS IN PLACE
    // axios.get('/bar/staff')
    //   .then((data) => {
    //     const staff = {
    //       id: data.id,
    //       name: data.username,
    //     };
    //     this.setState({bartenders: staff});
    //   });
  }

  render() {
    const bar = this.props.barInfo;
    return (
      <Wrapper>
        <h1>Bartenders at {bar.barName}</h1>
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