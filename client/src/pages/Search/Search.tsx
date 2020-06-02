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
        <div className="search__component-container">
          <SearchIntro />
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Search;
