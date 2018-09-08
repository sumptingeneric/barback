import React from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Business from "./components/business/business.jsx";

const Login = () => (
  <div>
    <nav>
      <Link to="/customer">Customer</Link> <Link to="/business">Business</Link>
    </nav>

    <Router>
      <App path="/customer" />
      <Business path="/business" />
    </Router>
  </div>
);

ReactDOM.render(<Login />, document.getElementById("root"));
