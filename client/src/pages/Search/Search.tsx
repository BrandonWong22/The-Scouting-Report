import React, { Component } from "react";
import "./Search.scss";
import SearchIntro from "../../components/SearchIntro/SearchIntro";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const API_URL: string = "http://localhost:8080/";

class Search extends Component<{}, SearchState> {
  state: SearchState = {
    validateSearch: false,
    reportIsReady: false,
    allCompanies: [],
  };

  componentDidMount() {
    this.getAllCompanies();
  }

  getAllCompanies = () => {
    axios.get(API_URL + "all-companies").then((response) => {
      this.setState({
        allCompanies: response.data,
      });
    });
  };

  handleSearchSubmit = (search: string, event: any) => {
    event.preventDefault();
    this.validateSearchResult(search);
  };

  validateSearchResult = (searchResult: string) => {
    if (searchResult === "") {
      console.log("missing");
    } else {
      axios.get(API_URL + "search/" + searchResult).then((response: any) => {
        let resData: object = response.data;
        if (Object.keys(resData).length === 0) {
          console.log("this works");
        } else {
          console.log("company is valid");
        }
      });
    }
  };

  render() {
    return (
      <div className="search">
        <div className="search__component-container">
          <SearchIntro />
          <SearchBar
            handleSearchSubmit={this.handleSearchSubmit}
            allCompanies={this.state.allCompanies}
          />
        </div>
      </div>
    );
  }
}

export default Search;
