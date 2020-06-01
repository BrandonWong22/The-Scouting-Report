import React, { Component } from "react";
import "./Search.scss";

interface IState {
  searchValue: String;
  validateSearch: Boolean;
  reportIsReady: Boolean;
}

class Search extends Component<{}, IState> {
  state: IState = {
    searchValue: "",
    validateSearch: false,
    reportIsReady: false,
  };

  render() {
    return <div className="search">search</div>;
  }
}

export default Search;
