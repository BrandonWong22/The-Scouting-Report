import React, { Component } from "react";
import "./Results.scss";
import axios from "axios";
import CompanyInfoSection from "../../components/CompanyInfoSection/CompanyInfoSection";
import CompanyResultsSection from "../../components/CompanyResultsSection/CompanyResultsSection";
import firebase from "firebase";
import { toast } from "react-toastify";
import Switch from "react-switch";
import ResultsPageSearchBar from "../../components/ResultsPageSearchBar/ResultsPageSearchBar";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";

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
    currentStockPrice: "",
    socket: connectSocket("https://scouting-report--api.herokuapp.com"),
    // socket: connectSocket("http://localhost:8080/"),
    stockDate: "",
    stockOpenPrice: null,
    stockLowPrice: null,
    stockHighPrice: null,
    stockClosingPrice: null,
    stockVolume: null,
    stockChange: null,
    stockData30: [],
    stockData30DateLabel: [],
    stockDailyPrices: [],
    stockDailyTimes: [],
    darkMode: JSON.parse(localStorage.getItem("dark") || "{}"),
  };

  componentDidMount() {
    this.configureSocketConnection();

    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        // User is signed in.
        //make get request using data from the search page to get
        //company profile from API

        let symbol: string = this.props.match.params.id;

        let url: string =
          "https://financialmodelingprep.com/api/v3/company/profile/" +
          symbol +
          "?apikey=d084cd25905084810ee3429ed54c83d9";

        this.fetchDailyStockPrice(symbol);
        this.fetchHistoricalStockData30Day(symbol);
        this.fetchCompanyData(symbol);
        this.fetchCompanyInformation(url);
      } else {
        // No user is signed in.
        this.props.history.push({
          pathname: "/",
        });
        toast.error("Not Signed In", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }
    });
  }

  componentDidUpdate(_: any, prevState: { darkMode: boolean }) {
    if (this.state.darkMode !== prevState.darkMode) {
      localStorage.setItem("dark", JSON.stringify(this.state.darkMode));
    }
  }

  // ASK ABOUT THIS
  getInitialMode = () => {
    const savedMode: any = JSON.parse(localStorage.getItem("dark") || "{}");
    return savedMode || false;
  };

  //generate date in format YYYY/MM/DD
  getDate = (date: any) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  //get daily stock prices/trends
  fetchDailyStockPrice = (symbol: string) => {
    let today: string = this.getDate(Date.now());
    let filteredDataArray: any = [];
    let dailyPrices: Array<number> = [];
    let dailyTimes: Array<string> = [];

    axios
      .get(
        `https://financialmodelingprep.com/api/v3/historical-chart/15min/${symbol}?apikey=d084cd25905084810ee3429ed54c83d9`
      )
      .then((response: any) => {
        response.data.forEach((item: any) => {
          if (item.date.includes(today)) {
            filteredDataArray.push(item);
          }
        });

        filteredDataArray.forEach((element: any) => {
          let dateTime: string = element.date;
          dateTime = dateTime.replace(today, "");
          dailyPrices.push(element.open);
          dailyTimes.push(dateTime);
        });

        this.setState({
          stockDailyPrices: dailyPrices.reverse(),
          stockDailyTimes: dailyTimes.reverse(),
        });
      });
  };

  //get historical stock data for the past 30 days
  fetchHistoricalStockData30Day = (symbol: string) => {
    let yesterday: string = this.getDate(Date.now() - 1 * 24 * 60 * 60 * 1000);
    let day30: string = this.getDate(Date.now() - 30 * 24 * 60 * 60 * 1000);

    // console.log(yesterday, day30);

    axios
      .get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${day30}&to=${yesterday}&apikey=d084cd25905084810ee3429ed54c83d9`
      )
      .then((response) => {
        let filteredData: Array<number> = [];
        let filteredDates: Array<string> = [];

        response.data.historical.forEach((element: any) => {
          filteredData.push(element.close);
          filteredDates.push(element.date);
        });

        this.setState({
          stockData30: filteredData.reverse(),
          stockData30DateLabel: filteredDates.reverse(),
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
      });
    });
  };

  //configure web socket connection
  configureSocketConnection = () => {
    this.state.socket.on("connect", () => {
      console.log("connected");

      this.state.socket.emit("client-message", this.props.match.params.id);
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

  //handle dark mode toggle
  handleDarkModeToggle = () => {
    // alert("i have been touched");
    if (this.state.darkMode) {
      this.setState({
        darkMode: false,
      });
    } else {
      this.setState({
        darkMode: true,
      });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.darkMode
            ? "results-page results-page--dark"
            : "results-page results-page--light"
        }
      >
        <CompanyInfoSection
          companySymbol={this.state.companySymbol}
          companyName={this.state.companyName}
          companyExchange={this.state.companyExchange}
          companyIndustry={this.state.companyIndustry}
          companyWebsite={this.state.companyWebsite}
          companyCEO={this.state.companyCEO}
          history={this.props.history}
          darkMode={this.state.darkMode}
        />
        <div className="results-page__results">
          <div className="results-page__results-ctn">
            <div className="results-page__top-ctn">
              <div>
                <h1 className="results-page__results-header">Results</h1>
              </div>

              <div className="results-page__switch-ctn">
                <ResultsPageSearchBar darkMode={this.state.darkMode} />
                <p
                  className="results-page__light-icon"
                  style={{
                    color: this.state.darkMode ? "grey" : "steelblue",
                  }}
                >
                  ☀︎
                </p>
                <Switch
                  checked={this.state.darkMode}
                  onChange={this.handleDarkModeToggle}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                  className="results-page__results-switch"
                  id="material-switch"
                />
                <p
                  className="results-page__dark-icon"
                  style={{
                    color: this.state.darkMode ? "steelblue" : "grey",
                  }}
                >
                  ☾
                </p>
              </div>
            </div>

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
              stockDailyPrices={this.state.stockDailyPrices}
              stockDailyTimes={this.state.stockDailyTimes}
              darkMode={this.state.darkMode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
