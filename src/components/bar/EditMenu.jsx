import React from "react";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

class EditMenu extends React.Component {
  state = {};

  render() {
    console.log("rendering EditMenu");
    return (
      <Wrapper>
        <h1>My Menu</h1>
        <p>add new drink form - name, description, img url</p>
        <p>list of all drinks with edit option</p>
        <p>include item count?</p>
      </Wrapper>
    );
  }

};

export default EditMenu;