import React from "react";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

class BarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      bartenders: [{name: 'Cliff'}, {name: 'Rex'}, {name: 'Regina'}],
    };
  }

  onComponentDidMount() {
    //axios request to get bartender names with match to barId
    //then set state of bartenders to data
  }

  updateInput() {
    // update business name and/or password
    this.setState({showInput: false});
  }

  render() {
    const bar = this.props.barInfo;
    return (
      <Wrapper>
        <h1>My Profile</h1>
        <h2>{bar.barName}</h2>
        <button onClick={()=> this.setState({showInput: true})}>
          Update My Info
        </button>
        {this.state.showInput ? (
          <form>
            <p>Business Name:</p>
            <input 
              type="text" 
              defaultValue={bar.barName} 
              onChange={this.updateInput.bind(this)} />
            <p>Password:</p>
            <input 
              type="text" 
              defaultValue={bar.password} 
              onChange={this.updateInput.bind(this)} />
          </form>
        ) : null}
        <h2>Bartenders on Staff</h2>
        {this.state.bartenders.map((bartender) => {
          console.log(bartender);
          return (
            <p>{bartender.name}</p>
          )
        })}
      </Wrapper>
    );
  }
  
};

export default BarProfile;