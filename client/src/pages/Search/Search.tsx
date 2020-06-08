import React, { Component } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Search.scss";
import SearchIntro from "../../components/SearchIntro/SearchIntro";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import firebase from "firebase";

const API_URL: string = "http://localhost:8080/";

interface SearchProps {
  loginState?: undefined | Boolean;
  history: any;
}

toast.configure();

class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    validateSearch: false,
    reportIsReady: false,
    allCompanies: [],
    redirect: false,
    companySymbol: "",
  };

  componentDidMount() {
    let passedDownProps: Object = Object.values(this.props);
    console.log(passedDownProps);

    let loginState = passedDownProps[1].state;

    if (loginState === undefined) {
      //toast notification to show that user
      //has not been authenticated
      toast.error("Not Signed In", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      this.props.history.push({
        pathname: "/",
      });
    } else {
      this.getAllCompanies();
    }
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
      toast.error("Text Field is Empty", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    } else {
      axios.get(API_URL + "search/" + searchResult).then((response: any) => {
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
          this.setState({
            redirect: true,
            companySymbol: searchResult,
          });
        }
      });
    }
  };

  handleLogout = () => {
    console.log("i have been touched");
    firebase.auth().signOut();
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    console.log(this.props);

    return (
      <div className="search">
        <div className="search__component-container">
          <SearchIntro />
          <SearchBar
            handleSearchSubmit={this.handleSearchSubmit}
            allCompanies={this.state.allCompanies}
          />
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Search;
