import React, { Component } from "react";
import firebase from "firebase";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./ResultsPageSearchBar.scss";
import { toast } from "react-toastify";
import axios from "axios";

interface ResultsPageSearchBarProps {
  // handleCompanySearch(search: string, event: React.FormEvent<HTMLInputElement>);
  darkMode: boolean;
  history: any;
}

interface ResultsPageSearchBarState {
  allCompaniesFireBase: Array<Object>;
  searchValue: string;
}

const API_URL: string =
  "https://scouting-report--api.herokuapp.com/" || "http://localhost:8080/";

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

  handleFormSubmit = (event: any) => {
    event.preventDefault();
    let newCompanySymbol: string = this.state.searchValue;

    if (newCompanySymbol === "") {
      toast.error("Text Field is Empty", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    } else {
      axios
        .get(API_URL + "search/" + newCompanySymbol)
        .then((response: any) => {
          let resData: Object = response.data;

          //Check if response data is {}
          //This indicates that the searched company is not valid
          if (Object.keys(resData).length === 0) {
            //display toast notifcation for invalid company
            toast.error("Company Not Found", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              progress: undefined,
            });
          } else {
            // console.log("ok");
            // alert("ok");
            this.props.history.push({
              pathname: "/results/" + newCompanySymbol,
            });
          }
        });
    }
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
          <form
            className="results-search__form"
            onSubmit={this.handleFormSubmit}
          >
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
