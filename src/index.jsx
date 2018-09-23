import React from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import App from "./components/App.jsx";
import Business from "./components/business/business.jsx";
import Bar from "./components/bar/Bar.jsx";
import BarStaff from "./components/bar/BarStaff.jsx";
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
      },
      showLogo: true,
    }
    this.hideLogo = this.hideLogo.bind(this);
  }

  hideLogo() {
    this.setState({showLogo: false});
  }
  render() {
    const bar = this.state.barInfo;
    return (
      <Wrapper>
        <nav>
          <Link to="/customer" onClick={this.hideLogo}>Customer</Link>
          {' | '}
          <Link to="/business" onClick={this.hideLogo}>Bartender</Link>
          {' | '}
          <Link to="/bar" onClick={this.hideLogo}>Bar</Link>
          {' | '}
          <Link to="/register" onClick={this.hideLogo}>Sign Up/Login</Link>
        </nav>
        {this.state.showLogo ? (
          <img alt="barback logo" src={require("/barback-logo.png")} />
        ) : null}

        <Router>
          <App path="/customer" />
          <Business path="/business" />
          <Bar path="/bar" barInfo={bar}/>
          <BarStaff path="/bar/staff" barInfo={bar}/>
          <EditMenu path="/bar/menu" barInfo={bar}/>
          <Register path="/register" />
        </Router>
      </Wrapper>
    )
  }
};

ReactDOM.render(<Login />, document.getElementById("root"));
