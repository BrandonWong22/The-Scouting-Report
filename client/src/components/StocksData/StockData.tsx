import React, { Component } from "react";
import "./StockData.scss";
import axios from "axios";

interface StockDataProps {
  companyName: string;
  companySymbol: string;
  currentStockPrice: string;
  date?: string;
  open?: string;
  low?: string;
  high?: string;
  close?: string;
  volume?: string;
  change?: string;
}

interface StockDataState {
  date: string;
  openPrice: number | null;
  lowPrice: number | null;
  highPrice: number | null;
  closingPrice: number | null;
  volume: number | null;
  change: number | null;
}

const API_URL_NUMERICAL_DATA: string =
  "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=d084cd25905084810ee3429ed54c83d9";

class StockData extends Component<StockDataProps, StockDataState> {
  state = {
    date: "",
    openPrice: null,
    lowPrice: null,
    highPrice: null,
    closingPrice: null,
    volume: null,
    change: null,
  };

  componentDidMount() {
    axios.get(API_URL_NUMERICAL_DATA).then((response) => {
      let resData: {
        date: string;
        open: number;
        low: number;
        high: number;
        close: number;
        volume: number;
        change: null;
      } = response.data.historical[0];
      console.log(resData);
      console.log(typeof resData.open);

      this.setState({
        date: resData.date,
        openPrice: resData.open,
        lowPrice: resData.open,
        highPrice: resData.high,
        closingPrice: resData.close,
        volume: resData.volume,
        change: resData.change,
      });
    });
  }

  render() {
    const { companyName, companySymbol, currentStockPrice } = this.props;

    return (
      <div className="stock-data">
        <div className="stock-data__section-results">
          <h2>
            {companyName} {currentStockPrice}
          </h2>
        </div>

        <div className="stock-data__data-ctn">
          <div className="stock-data__col stock-data__col--col1">
            <div className="stock-data__section-ctn">
              <h3>Symbol</h3>
              <h3>{companySymbol}</h3>
            </div>

            <div className="stock-data__section-ctn">
              <h3>Date</h3>
              <h3>{this.state.date}</h3>
            </div>

            <div className="stock-data__section-ctn">
              <h3>Open</h3>
              <h3>{this.state.openPrice}</h3>
            </div>

            <div className="stock-data__section-ctn">
              <h3>Low</h3>
              <h3>{this.state.lowPrice}</h3>
            </div>
          </div>

          <div className="stock-data__col stock-data__col--col2">
            <div className="stock-data__section-ctn">
              <h3>High</h3>
              <h3>{this.state.highPrice}</h3>
            </div>

            <div className="stock-data__section-ctn">
              <h3>Close</h3>
              <h3>{this.state.closingPrice}</h3>
            </div>

            <div className="stock-data__section-ctn">
              <h3>Volume</h3>
              <h3>{this.state.volume}</h3>
            </div>

            <div className="stock-data__section-ctn">
              <h3>Change</h3>
              <h3>{this.state.change}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockData;
