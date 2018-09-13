import React from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Business from "./components/business/business.jsx";
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
      <Link to="/customer">Customer</Link> <Link to="/business">Business</Link>
    </nav>

    <Router>
      <App path="/customer" />
      <Business path="/business" />
    </Router>
  </Wrapper>
);

ReactDOM.render(<Login />, document.getElementById("root"));
