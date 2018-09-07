import React from "react";
import Search from "./customer/search.jsx";
class App extends React.Component {
  state = {
    test: ""
  };

  render() {
    return (
      <div>
        <h1>Title</h1>
        <Search />
      </div>
    );
  }
}

export default App;
