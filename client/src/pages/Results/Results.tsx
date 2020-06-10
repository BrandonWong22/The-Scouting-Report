import React, { Component } from "react";
import "./Results.scss";
import axios from "axios";
import CompanyInfoSection from "../../components/CompanyInfoSection/CompanyInfoSection";
import CompanyResultsSection from "../../components/CompanyResultsSection/CompanyResultsSection";

// import { css } from "@emotion/core";
// import ClipLoader from "react-spinners/ClipLoader";

import io from "socket.io-client";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const socket = io("http://localhost:8080");

interface ResultsState {
  companySymbol: String;
  companyName: String;
  companyExchange: String;
  companyIndustry: String;
  companyWebsite: String;
  companyCEO: String;
  companyDescription: String;
  loading: Boolean;
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
      console.log(response.data);
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
    // this.setState({
    //   loading: false,
    // });
    socket.on("stock_price", (data: string) => {
      console.log(data);
    });
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
          companyDescription={this.state.companyDescription}
        />
        <CompanyResultsSection />
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
