import React, { Component } from "react";
import "./SearchBar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

class SearchBar extends Component<SearchBarProps, ISearchBarState> {
  state = {
    searchValue: "",
  };

  handleOnSearch = (company: string) => {
    console.log("search", company);
    this.setState({
      searchValue: company,
    });
  };

  handleOnSelect = (company: any) => {
    let companyArr: Array<string> = Object.values(company);

    this.setState({
      searchValue: companyArr[1],
    });
  };

  handleOnFocus = () => {
    console.log("Focused");
  };

  handleFormSubmit = (event: any) => {
    event.preventDefault();
    let value: string = this.state.searchValue;
    this.props.handleSearchSubmit(value, event);
  };

  render() {
    return (
      <div className="search__searchbar-contents">
        <div className="search__searchbar-div">
          <div className="search__autocomplete-container">
            <form className="search__form" onSubmit={this.handleFormSubmit}>
              <ReactSearchAutocomplete
                items={this.props.allCompaniesFireBase}
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
