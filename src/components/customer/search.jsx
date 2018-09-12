import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drink: ""
    };

    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.search = this.search.bind(this);
  }

  // update search value, run search on enter
  handleOnKeyUp(e) {
    if (e.key === "Enter") {
      this.search();
    } else {
      this.setState({
        drink: e.target.value
      });
    }
  }

  // perform the search based on state: drink
  search() {
    //console.log(this.state.drink);
  }

  render() {
    return (
      <input placeholder="find your drink..." onKeyUp={this.handleOnKeyUp} />
    );
  }
}

export default Search;
