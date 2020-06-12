import React, { Component } from "react";
import "./Results.scss";
import axios from "axios";
import CompanyInfoSection from "../../components/CompanyInfoSection/CompanyInfoSection";
import CompanyResultsSection from "../../components/CompanyResultsSection/CompanyResultsSection";

import connectSocket from "socket.io-client";

// const API_URL: string = "http://localhost:8080/";

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
    stockDate: "",
    stockOpenPrice: null,
    stockLowPrice: null,
    stockHighPrice: null,
    stockClosingPrice: null,
    stockVolume: null,
    stockChange: null,
    stockData30: [],
    stockData30DateLabel: [],
  };

  componentDidMount() {
    //make get request using data from the search page to get
    //company profile from API
    let symbol: string = this.props.location.state.companySymbol;

    let url: string =
      "https://financialmodelingprep.com/api/v3/company/profile/" +
      symbol +
      "?apikey=d084cd25905084810ee3429ed54c83d9";

    this.fetchHistoricalStockData30Day(symbol);
    this.fetchCompanyData(symbol);
    this.fetchCompanyInformation(url);
    this.configureSocketConnection();
  }

  getDate = (date: any) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  //get historical stock data for the past 30 days
  fetchHistoricalStockData30Day = (symbol: string) => {
    let yesterday: string = this.getDate(Date.now() - 1 * 24 * 60 * 60 * 1000);
    let day30: string = this.getDate(Date.now() - 30 * 24 * 60 * 60 * 1000);

    axios
      .get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${day30}&to=${yesterday}&apikey=d084cd25905084810ee3429ed54c83d9`
      )
      .then((response) => {
        // let filteredData: Array<number> = []
        // let dates: Array<string> = []
        response.data.historical.map((data: any) => {
          this.setState({
            stockData30: [...this.state.stockData30, data.close],
            stockData30DateLabel: [
              ...this.state.stockData30DateLabel,
              data.date,
            ],
          });
        });
      });
  };

  //get numerical data for the stocks tab
  fetchCompanyData = (symbol: string) => {
    const API_URL_NUMERICAL_DATA: string =
      "https://financialmodelingprep.com/api/v3/historical-price-full/";

    const API_KEY = "?apikey=d084cd25905084810ee3429ed54c83d9";

    axios.get(API_URL_NUMERICAL_DATA + symbol + API_KEY).then((response) => {
      let resData: {
        date: string;
        open: number;
        low: number;
        high: number;
        close: number;
        volume: number;
        change: number;
      } = response.data.historical[0];

      this.setState({
        stockDate: resData.date,
        stockOpenPrice: resData.open,
        stockLowPrice: resData.low,
        stockHighPrice: resData.high,
        stockClosingPrice: resData.close,
        stockVolume: resData.volume,
        stockChange: resData.change,
      });
    });
  };

  //get company information for the nav bar
  fetchCompanyInformation = (url: string) => {
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
  };

  //configure web socket connection
  configureSocketConnection = () => {
    this.state.socket.on("connect", () => {
      this.state.socket.emit(
        "client-message",
        this.props.location.state.companySymbol
      );
      this.state.socket.on("stock_price", (data: string) => {
        // console.log("socket data", data);
        this.setState({
          currentStockPrice: data,
        });
      });
    });
  };

  //disconnect web socket when component unmounts
  componentWillUnmount() {
    this.state.socket.close();
  }

  render() {
    console.log(this.state.stockData30);

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
        <CompanyResultsSection
          companyName={this.state.companyName}
          companySymbol={this.state.companySymbol}
          currentStockPrice={this.state.currentStockPrice}
          stockDate={this.state.stockDate}
          stockOpenPrice={this.state.stockOpenPrice}
          stockLowPrice={this.state.stockLowPrice}
          stockHighPrice={this.state.stockHighPrice}
          stockClosingPrice={this.state.stockClosingPrice}
          stockVolume={this.state.stockVolume}
          stockChange={this.state.stockChange}
          stockData30={this.state.stockData30}
          stockData30DateLabel={this.state.stockData30DateLabel}
        />
        {/* {this.state.currentStockPrice} */}
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
