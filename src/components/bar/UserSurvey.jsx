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
            // email: "",
            drinkQuality: 1,
            customerServices: 5
        }
    }
    
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

    handleDrinkChange = (rate) => {
        this.setState({drinkQuality: rate});
    }

    handleCustomerChange = (rate) => {
        this.setState({customerServices: rate});
    }

    // handleRatingChange(rating) {
    //     console.log('rating', rating);
    //   }

    handleSubmit = () => {
        const {name, drinkQuality, customerServices} = this.state;
        const userSurvey = {name, drinkQuality, customerServices};

        axios.post(`/api/stats/survey`, userSurvey)
        .then(res => {
            // alert("Thanks for taking the survey!");
            console.log(res);
        })
        .catch(err => console.log(err));
        this.props.changeModal("");
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

                {/* <div htmlFor="email">E-mail:</div>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                onChange={this.handleChange}
                value={this.state.email}/> */}
                <div>
                    <h1>How was your drink? </h1>
                </div>
                <div>
                <Rating 
                name='drinkQuality'
                
                initialRating={this.state.drinkQuality}
                // emptySymbol={<img src="star-grey.png" className='icon' alt="empty star"/>}
                // fullSymbol={<img src="star-full.png" className='icon' alt="filled star"/>}
                onChange={(rate) => this.handleDrinkChange(rate)}
                />
                </div>
                <div>
                    <h1>How was our service? </h1>
                </div>
                <div>
                <Rating
                name='customerServices' 
                initialRating={this.state.customerServices}
                onChange={(rate) => this.handleCustomerChange(rate)}
                // emptySymbol={<img src="./assets/images/star-grey.png" className="icon" alt=""/>}
                // fullSymbol={<img src="./assets/images/star-yellow.png" className="icon" alt=""/>}
                />
                </div>
         
            <ClickableWrapper type="submit" onClick={this.handleSubmit}>
              Submit Survey
            </ClickableWrapper>

            <ClickableWrapper onClick={() => this.props.changeModal("")}>
            Return to Menu
          </ClickableWrapper>
          
            
            </div>
            </ModalContainer>
        );
    }

};

export default UserSurvey;