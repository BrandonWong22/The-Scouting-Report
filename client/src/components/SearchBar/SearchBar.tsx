import React, { Component } from "react";
import "./SearchBar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import data from "../../helpers/data.json";

interface ISearchBarProps {
  handleSearchSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

interface ISearchBarState {
  searchValue: string;
}

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  state = {
    searchValue: "",
  };

  handleOnSearch = (company: string) => {
    // console.log("search", company);
    this.setState({
      searchValue: company,
    });
  };

  handleOnSelect = (company: any) => {
    let companyArr: Array<string> = Object.values(company);

    this.setState({
      searchValue: companyArr[0],
    });
  };

  handleOnFocus = () => {
    console.log("Focused");
  };

  render() {
    console.log("search value ->", this.state.searchValue);

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
