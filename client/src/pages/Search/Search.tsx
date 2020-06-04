import React, { Component } from "react";
import "./Search.scss";
import SearchIntro from "../../components/SearchIntro/SearchIntro";
import SearchBar from "../../components/SearchBar/SearchBar";

class Search extends Component<{}, SearchState> {
  state: SearchState = {
    validateSearch: false,
    reportIsReady: false,
    allCompanies: [],
  };

  componentDidMount() {}

  handleSearchSubmit = (search: string, event: any) => {
    event.preventDefault();
    console.log(search);
  };

  render() {
    return (
      <div className="search">
        <div className="search__component-container">
          <SearchIntro />
          <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default Search;
