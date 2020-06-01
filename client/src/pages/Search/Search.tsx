import React, { Component } from "react";
import "./Search.scss";
import SearchIntro from "../../components/SearchIntro/SearchIntro";

class Search extends Component<{}, SearchState> {
  state: SearchState = {
    searchValue: "",
    validateSearch: false,
    reportIsReady: false,
  };

  render() {
    return (
      <div className="search">
        <SearchIntro />
      </div>
    );
  }
}

export default Search;
