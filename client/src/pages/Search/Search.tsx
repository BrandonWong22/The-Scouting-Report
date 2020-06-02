import React, { Component } from "react";
import "./Search.scss";
import SearchIntro from "../../components/SearchIntro/SearchIntro";
import SearchBar from "../../components/SearchBar/SearchBar";

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
        <SearchBar />
      </div>
    );
  }
}

export default Search;
