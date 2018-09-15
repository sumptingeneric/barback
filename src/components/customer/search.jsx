import React from "react";

const Search = props => {
  return (
    <input placeholder="find your drink..." onKeyUp={props.handleSearch} />
  );
};

export default Search;
