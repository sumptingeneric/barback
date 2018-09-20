import React from "react";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

class BarProfile extends React.Component {
  state = {};

  render() {
    console.log("rendering BarProfile");
    return (
      <Wrapper>
        <h1>My Profile</h1>
        <p>bar name - editable</p>
        <p>list of bartenders</p>
      </Wrapper>
    );
  }
  
};

export default BarProfile;