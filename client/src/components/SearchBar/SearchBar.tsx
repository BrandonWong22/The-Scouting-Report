import React, { Component } from "react";
import "./SearchBar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

class SearchBar extends Component<{}> {
  state = {
    searchValue: "",
  };

  render() {
    return (
      <div className="search__searchbar-contents">
        <div className="search__searchbar-div">
          <div className="search__autocomplete-container">
            <form className="search__form">
              <ReactSearchAutocomplete
                // items={items}
                // onSearch={handleOnSearch}
                // onSelect={handleOnSelect}
                // onFocus={handleOnFocus}
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
