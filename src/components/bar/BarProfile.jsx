import React from "react";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
  bottom-margin: 10px;
`;

class BarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      bartenders: [
        {id: '1', name: 'Cliff'}, 
        {id: '2', name: 'Rex'}, 
        {id: '3', name: 'Regina'}
      ],
    };
  }

  onComponentDidMount() {
    //axios request to get bartender names with match to barId
    //then set state of bartenders to data
  }

  updateInput() {
    // temporarily save new name/password
  }
  saveChanges() {
    // update business name and/or password
    this.setState({showInput: false});
  }

  render() {
    const bar = this.props.barInfo;
    return (
      <Wrapper>
        <h1>My Profile</h1>
        <h2>{bar.barName}</h2>
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
            <br />
            <button onClick={this.saveChanges.bind(this)}>
              Save Changes
            </button>
          </form>
        )
        : (
          <button onClick={()=> this.setState({showInput: true})}>
            Update My Info
          </button>
        )}
        <h2>Bartenders on Staff</h2>
        <ul>
        {this.state.bartenders.map((bartender) => {
          return (
            <li key={bartender.id}>{bartender.name}</li>
          )
        })}
        </ul>
      </Wrapper>
    );
  }
  
};

export default BarProfile;