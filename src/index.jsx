import React from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Business from "./components/business/business.jsx";
import Bar from "./components/bar/bar.jsx";
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
    </Router>
  </Wrapper>
);

ReactDOM.render(<Login />, document.getElementById("root"));
