import React, { Component } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Search.scss";
import SearchIntro from "../../components/SearchIntro/SearchIntro";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import firebase from "firebase";

const API_URL: string = "http://localhost:8080/";

toast.configure();

class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    validateSearch: false,
    signedIn: false,
    redirect: false,
    companySymbol: "",
    allCompaniesFireBase: [],
  };

  // connect to firebase db which has a json file of every
  //publicly traded US company
  database: any = firebase.database().ref().child("companylist");

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log("true");
        this.getAllCompanies();
      } else {
        // No user is signed in.
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
      }
    });
  }

  componentDidUpdate(_: any, prevState: { redirect: Boolean }) {
    if (prevState.redirect !== this.state.redirect && !prevState.redirect) {
      this.props.history.push({
        state: {
          redirect: this.state.redirect,
          companySymbol: this.state.companySymbol,
          signedIn: this.props.location.state,
        },
        pathname: "/results/" + this.state.companySymbol,
      });
    }
  }

  getAllCompanies = () => {
    // query the database on firebase and the set the state
    // of all companies to the database
    this.database.on("value", (snap: any) => {
      this.setState({
        allCompaniesFireBase: snap.val(),
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

  render() {
    console.log(this.props);

    return (
      <div className="search">
        <div className="search__component-container">
          <SearchIntro />
          <SearchBar
            handleSearchSubmit={this.handleSearchSubmit}
            allCompaniesFireBase={this.state.allCompaniesFireBase}
          />
        </div>
      </div>
    );
  }
}

export default Search;
