import React from "react";
import { Link } from "@reach/router";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

class Bar extends React.Component {
  state = {
    barName: 'My Bar',
  };

  render() {
    return (
      <div>
        <h1>{this.state.barName}</h1>
        <Link to="/bar/survey">Send Survey</Link> {/* add to router in index.js*/}
        <Link to="/bar/profile">View Profile</Link>
        <Link to="/bar/menu">Edit Menu</Link>
        <p>stats go here...</p>
      </div>
    );
  }

};

export default Bar;