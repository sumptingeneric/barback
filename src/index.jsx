import React from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import App from "./components/App.jsx";
import Business from "./components/business/business.jsx";
import Bar from "./components/bar/Bar.jsx";
import BarProfile from "./components/bar/BarProfile.jsx";
import EditMenu from "./components/bar/EditMenu.jsx";
import Register from "./components/register/RegisterContainer.jsx";


//Styled Components
const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      barInfo: {
        id: '1',
        barName: 'The Best Bar',
        password: 'password',
      }
    }
  }
  render() {
    const bar = this.state.barInfo;
    return (
      <Wrapper>
        <nav>
          <Link to="/customer">Customer</Link>
          {' | '}
          <Link to="/business">Bartender</Link>
          {' | '}
          <Link to="/bar">Bar</Link>
          {' | '}
          <Link to="/register">Sign Up/Login</Link>
        </nav>

        <Router>
          <App path="/customer" />
          <Business path="/business" />
          <Bar path="/bar" barInfo={bar}/>
          <BarProfile path="/bar/profile" barInfo={bar}/>
          <EditMenu path="/bar/menu" barInfo={bar}/>
          <Register path="/register" />
        </Router>
      </Wrapper>
    )
  }
};

ReactDOM.render(<Login />, document.getElementById("root"));
