import React, { Component } from "react";
import firebase from "firebase";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./ResultsPageSearchBar.scss";

interface ResultsPageSearchBarProps {
  // handleNewSearch(search: string, event: React.FormEvent<HTMLInputElement>);
  darkMode: boolean;
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

  //conditional syling on the search bar
  darkModeStyle = {
    backgroundColor: "#525252",
    color: "#999",
    borderRadius: "none",
    border: "none",
    height: "40px",
    borderTopLeftRadius: "10px",
  };

  lightModeSytle = {
    height: "40px",
    color: "#333",
    borderRadius: "none",
    boxShadow: "none",
  };

  render() {
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
                showIcon={false}
                placeholder={"Search"}
                styling={
                  this.props.darkMode ? this.darkModeStyle : this.lightModeSytle
                }
              />
            </div>
            <button
              type="submit"
              className={
                this.props.darkMode
                  ? "results-search__button results-search__button--dark"
                  : "results-search__button results-search__button--light"
              }
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ResultsPageSearchBar;
