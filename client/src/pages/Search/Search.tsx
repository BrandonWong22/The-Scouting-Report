import React, { Component } from "react";
import "./Search.scss";

class Search extends Component<{}, SearchState> {
  state: SearchState = {
    searchValue: "",
    validateSearch: false,
    reportIsReady: false,
  };

  render() {
    return <div className="search">search</div>;
  }
}

export default Search;
