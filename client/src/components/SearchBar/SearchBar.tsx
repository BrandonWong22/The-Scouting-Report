import React, { useState } from "react";
import "./SearchBar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleOnSearch = (company: string) => {
    // use setSearchValue method to update the searchValue state
    // to be the company value in the search field
    setSearchValue(company);
  };

  const handleOnSelect = (company: any) => {
    let companyArr: Array<string> = Object.values(company);

    // when a company is selected from the auto suggest
    // set the search value to state to the company selected
    setSearchValue(companyArr[1]);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    let value: string = searchValue;
    props.handleSearchSubmit(value, event);
  };

  const handleOnFocus = () => {
    console.log("focused");
  };

  return (
    <div className="search__searchbar-contents">
      <div className="search__searchbar-div">
        <div className="search__autocomplete-container">
          <form className="search__form" onSubmit={handleFormSubmit}>
            <div className="search__input-ctn">
              <ReactSearchAutocomplete
                items={props.allCompaniesFireBase}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                maxResults={5}
                autoFocus
              />
            </div>

            <button className="search__button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
