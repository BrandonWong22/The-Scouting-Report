import React, { Component } from "react";
import firebase from "firebase";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./ResultsPageSearchBar.scss";

interface ResultsPageSearchBarProps {
  // handleNewSearch(search: string, event: React.FormEvent<HTMLInputElement>);
}

interface ResultsPageSearchBarState {
  allCompaniesFireBase: Array<Object>;
  searchValue: string;
}

class ResultsPageSearchBar extends Component<
  ResultsPageSearchBarProps,
  ResultsPageSearchBarState
> {
  state = {
    allCompaniesFireBase: [],
    searchValue: "",
  };

  database: any = firebase.database().ref().child("companylist");

  componentDidMount() {
    this.getAllCompanies();
  }

  getAllCompanies = () => {
    this.database.on("value", (snap: any) => {
      this.setState({
        allCompaniesFireBase: snap.val(),
      });
    });
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
      searchValue: companyArr[1],
    });
  };

  handleOnFocus = () => {
    console.log("Focused");
  };

  render() {
    console.log(this.state.searchValue);

    return (
      <div>
        <div className="results-search">
          <form className="results-search__form">
            <div className="results-search__input-ctn">
              <ReactSearchAutocomplete
                items={this.state.allCompaniesFireBase}
                onSearch={this.handleOnSearch}
                onSelect={this.handleOnSelect}
                onFocus={this.handleOnFocus}
                maxResults={5}
                autoFocus
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ResultsPageSearchBar;
