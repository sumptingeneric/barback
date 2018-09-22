import React from "react";
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

class UserSurvey extends React.Component {
    state = {
        name: "",
        email: "",
        rating: ""
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

    // handleSubmit = () => {
    //     const {name, email, rating} = this.state;
    //     const updatedUser = {name, email, rating};
    // }


    render() {
        return (
            <Wrapper>
                <div htmlFor="name">Name:</div>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                onChange={this.handleChange}
                value={this.state.info.name}/>

                <div htmlFor="email">E-mail:</div>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                onChange={this.handleChange}
                value={this.state.info.email}/>


                <button onClick={this.handleSubmit}>Submit</button>



            </Wrapper>
        );
    }

};

export default UserSurvey;