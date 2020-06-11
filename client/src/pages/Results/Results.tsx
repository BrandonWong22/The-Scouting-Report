import React, { Component } from "react";
import "./Results.scss";
import axios from "axios";
import CompanyInfoSection from "../../components/CompanyInfoSection/CompanyInfoSection";
import CompanyResultsSection from "../../components/CompanyResultsSection/CompanyResultsSection";

import io from "socket.io-client";

const socket = io("http://localhost:8080");

const API_URL: string = "http://localhost:8080/";

interface ResultsProps {
  location: any;
}

interface ResultsState {
  companySymbol: String;
  companyName: String;
  companyExchange: String;
  companyIndustry: String;
  companyWebsite: String;
  companyCEO: String;
  companyDescription: String;
  loading: Boolean;
  currentStockPrice: String;
}

class Results extends Component<ResultsProps, ResultsState> {
  state = {
    companySymbol: "",
    companyName: "",
    companyExchange: "",
    companyIndustry: "",
    companyWebsite: "",
    companyCEO: "",
    companyDescription: "",
    loading: true,
    currentStockPrice: "",
  };

  componentDidMount() {
    //make get request using data from the search page to get
    //company profile from API
    let passedDownProps: any = Object.values(this.props);
    let symbol: String = passedDownProps[1].state.companySymbol;

    let url =
      "https://financialmodelingprep.com/api/v3/company/profile/" +
      symbol +
      "?apikey=d084cd25905084810ee3429ed54c83d9";

    axios.get(url).then((response) => {
      // console.log(response.data);
      const data: any = response.data;
      this.setState({
        companySymbol: data.symbol,
        companyName: data.profile.companyName,
        companyExchange: data.profile.exchange,
        companyIndustry: data.profile.industry,
        companyWebsite: data.profile.website,
        companyCEO: data.profile.ceo,
        companyDescription: data.profile.description,
      });
    });

    axios
      .post(API_URL + "stock", {
        symbol: this.props.location.state.companySymbol,
      })
      .then((response) => {
        console.log(response);
      });

    socket.on("stock_price", (data: string) => {
      console.log("socket data", data);
      this.setState({
        currentStockPrice: data,
      });
    });
  }

  componentWillUnmount() {
    socket.emit("disconnect", "i have been disconnected");
  }

  render() {
    // console.log("state", this.state.currentStockPrice);
    console.log(this.props);

    return (
      <div className="results-page">
        <CompanyInfoSection
          companySymbol={this.state.companySymbol}
          companyName={this.state.companyName}
          companyExchange={this.state.companyExchange}
          companyIndustry={this.state.companyIndustry}
          companyWebsite={this.state.companyWebsite}
          companyCEO={this.state.companyCEO}
          // companyDescription={this.state.companyDescription}
        />
        <CompanyResultsSection />
        {this.state.currentStockPrice}
        {/* <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        /> */}
      </div>
    );
  }
}

export default Results;
