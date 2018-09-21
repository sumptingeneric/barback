import React from "react";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

class UserSurvey extends React.Component {
    state = {
        info: {
            name: "",
            email: ""
        },
        
    }


    render() {
        return (
            <Wrapper>



            </Wrapper>
        );
    }

};

export default UserSurvey;