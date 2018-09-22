import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import Rating from 'react-rating';

const ModalContainer = styled.div`
  background-color: white;
  width: 350px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;
const ClickableWrapper = styled.button`
  margin: 3px;
  width: 30%;
  font-size: 0.8em;
`;

class UserSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            rating: 0
        }
    }
    
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

    handleClick = () => {
        this.setState({rating: undefined});
    }

    handleRatingChange(rating) {
        console.log('rating', rating);
      }

    handleSubmit = () => {
        const {name, email, rating} = this.state;
        const userSurvey = {name, email, rating};

        axios.post(`/api/bar/survey/${userSurvey}`)
        .then(res => {
            alert("Thanks for taking the survey!");
            console.log('Survey data sent',res);
        })
        .catch(err => console.log(err));
        this.props.toggleModal();
    }


    render() {
        return (
            <ModalContainer>
                <div>
                <div htmlFor="name">Name:</div>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                onChange={this.handleChange}
                value={this.state.name}/>

                <div htmlFor="email">E-mail:</div>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                onChange={this.handleChange}
                value={this.state.email}/>
                <div>
                    <h1>How are we doing? </h1>
                </div>
                <div>
                <Rating {...this.props} initialRating={this.state.rating} 
                />
                </div>
         
            <ClickableWrapper type="submit" onClick={this.handleSubmit}>
              Submit Survey
            </ClickableWrapper>
          
            
            </div>
            </ModalContainer>
        );
    }

};

export default UserSurvey;