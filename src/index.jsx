import React from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Business from "./components/business/business.jsx";
import Bar from "./components/bar/Bar.jsx";
import BarProfile from "./components/bar/BarProfile.jsx";
import EditMenu from "./components/bar/EditMenu.jsx";
import styled from 'styled-components';


//Styled Components
const Wrapper = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-items: center; 
`;

const Login = () => (
  <Wrapper>
    <nav>
      <Link to="/customer">Customer</Link>
      {' | '}
      <Link to="/business">Bartender</Link>
      {' | '}
      <Link to="/bar">Bar</Link>
    </nav>

    <Router>
      <App path="/customer" />
      <Business path="/business" />
      <Bar path="/bar" />
      <BarProfile path="/bar/profile" />
      <EditMenu path="bar/menu" />
    </Router>
  </Wrapper>
);

ReactDOM.render(<Login />, document.getElementById("root"));
