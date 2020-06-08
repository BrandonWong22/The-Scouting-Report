import React, { Component } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Search.scss";
import SearchIntro from "../../components/SearchIntro/SearchIntro";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { Redirect } from "react-router-dom";

const API_URL: string = "http://localhost:8080/";

interface SearchProps {
  loginState?: undefined | Boolean;
}

toast.configure();

class Search extends Component<SearchProps, SearchState> {
  _isMounted: Boolean = false;

  state: SearchState = {
    validateSearch: false,
    reportIsReady: false,
    allCompanies: [],
    redirect: false,
    companySymbol: "",
  };

  // componentWillMount() {
  //   let passedDownProps: Object = Object.values(this.props);

  //   if (passedDownProps[1].state === undefined) {
  //     console.log("not logged in");
  //     // this.props.history.replace('/login')
  //     return (
  //       <Redirect
  //         to={{
  //           pathname: "/",
  //         }}
  //       />
  //     );
  //   }
  // }

  componentDidMount() {
    this._isMounted = true;
    this.getAllCompanies();
  }

  componentWillUnmount() {
    this._isMounted = false;
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
          console.log("company is valid");
          this.setState({
            redirect: true,
            companySymbol: searchResult,
          });
        }
      });
    }
  };

  render() {
    // let passedDownProps: Object = Object.values(this.props);
    // console.log(passedDownProps);

    // // console.log(passedDownProps[1]);
    // if (passedDownProps[1].state === undefined) {
    //   console.log("not logged in");
    //   toast.error("Not Signed In", {
    //     position: "bottom-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     progress: undefined,
    //   });
    //   return (
    //     <>
    //       <Redirect
    //         to={{
    //           pathname: "/",
    //         }}
    //       />
    //     </>
    //   );
    // }
    console.log(this.props);

    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/results",
            state: { symbol: this.state.companySymbol },
          }}
        />
      );
    }
    // console.log(this.props);

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
