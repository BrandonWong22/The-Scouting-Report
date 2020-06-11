import React, { Component } from "react";
import "./Results.scss";
import axios from "axios";
import CompanyInfoSection from "../../components/CompanyInfoSection/CompanyInfoSection";
import CompanyResultsSection from "../../components/CompanyResultsSection/CompanyResultsSection";

import connectSocket from "socket.io-client";

const API_URL: string = "http://localhost:8080/";

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
    socket: connectSocket("http://localhost:8080"),
  };

  componentDidMount() {
    //make get request using data from the search page to get
    //company profile from API
    let symbol: String = this.props.location.state.companySymbol;

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

    this.state.socket.on("connect", () => {
      this.state.socket.emit(
        "client-message",
        this.props.location.state.companySymbol
      );
      this.state.socket.on("stock_price", (data: string) => {
        console.log("socket data", data);
        this.setState({
          currentStockPrice: data,
        });
      });
    });
  }

  componentWillUnmount() {
    this.state.socket.close();
  }

  render() {
    return (
      <div className="results-page">
        <CompanyInfoSection
          companySymbol={this.state.companySymbol}
          companyName={this.state.companyName}
          companyExchange={this.state.companyExchange}
          companyIndustry={this.state.companyIndustry}
          companyWebsite={this.state.companyWebsite}
          companyCEO={this.state.companyCEO}
          history={this.props.history}
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
