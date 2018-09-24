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
      role: '',
      loggedIn: false,
    }
    this.hideLogo = this.hideLogo.bind(this);
    this.changeRole = this.changeRole.bind(this);
    this.logout = this.logout.bind(this);
  }

  hideLogo() {
    this.setState({ showLogo: false });
  }

  changeRole(role) {
    this.setState({
      role: role,
      loggedIn: true,
    })
  }

  logout() {
    this.setState({
      role: '',
      loggedIn: false,
    })
    location.reload();
  }

  renderView() {
    const { role, loggedIn } = this.state;
    if (!loggedIn) {
      return <Link to="/register" onClick={this.hideLogo}>Sign Up/Login</Link>
    } else {
      if (role === 'Admin') {
        return (
          <nav>
            <Link to="/customer" onClick={this.hideLogo}>View like a Customer</Link>
                { ' | ' }
            <Link to="/business">View like a Bartender</Link>
            { ' | ' }
            <Link to="/bar">Bar Analytics</Link>
          </nav>
        )
      }
      if (role === 'Bartender') {
        // just need to be navigated to bartender section
      }
      if (role === 'Customer') {
        // just need to be navigated to customer section
      }
    }
  }

  render() {
    const bar = this.state.barInfo;
    return (
      <Wrapper>
        <nav>
          {/*
          <Link to="/customer">Customer</Link>
          {' | '}
          <Link to="/business" onClick={this.hideLogo}>Bartender</Link>
          {' | '}
          <Link to="/bar" onClick={this.hideLogo}>Bar</Link>
          {' | '}
          <Link to="/register" onClick={this.hideLogo}>Sign Up/Login</Link>
          {' | '}
        */}
          {this.renderView()}
          <button onBlur={this.logout} onClick={this.logout}>Log Out</button>
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
          <Register path="/register" changeRole={this.changeRole} />
        </Router>
      </Wrapper>
    )
  }
};

ReactDOM.render(<Login />, document.getElementById("root"));
