import React, { Component } from "react";
import "./SearchBar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import data from "../../helpers/data.json";

class SearchBar extends Component<{}> {
  state = {
    searchValue: "",
  };

  handleOnSearch = (string, cached) => {
    console.log(string, cached);
  };

  handleOnSelect = (item) => {
    console.log(item);
  };

  handleOnFocus = () => {
    console.log("Focused");
  };

  render() {
    console.log(data);

    return (
      <div className="search__searchbar-contents">
        <div className="search__searchbar-div">
          <div className="search__autocomplete-container">
            <form className="search__form">
              <ReactSearchAutocomplete
                items={data.companylist}
                onSearch={this.handleOnSearch}
                onSelect={this.handleOnSelect}
                onFocus={this.handleOnFocus}
                maxResults={5}
                autoFocus
              />
              <button className="search__button" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
