import React from "react";
import Header from "./customer/Header.jsx";
import Checkout from "./checkout.jsx";
import Search from "./search.jsx";
import styled from 'styled-components';
import { Router, Link } from "@reach/router";

//Styled Components
const Grid = styled.header`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
`;

const Header = () => {
  return (
    <Grid>
      <Search />
      <nav>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <Router>
        <Checkout path="/checkout" />
      </Router>
    </Grid>
  );
};

export default Header;