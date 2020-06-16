import React, { Component } from "react";
import "./StockData.scss";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import StockLineGraph from "../StockLineGraph/StockLineGraph";
import StockDailyGraph from "../StockDailyGraph/StockDailyGraph";
import ClipLoader from "react-spinners/ClipLoader";

class StockData extends Component<StockDataProps, StockDataStates> {
  state = {
    loading: "30day",
    buttonLeftClassName:
      "stock-data__button stock-data__button--left stock-data__button--selected",
    buttonRightClassName: "stock-data__button stock-data__button--right",
  };

  componentDidUpdate(_: any, prevState: { loading: string }) {
    if (this.state.loading !== prevState.loading) {
      if (this.state.loading === "daily" && prevState.loading === "30day") {
        this.setState({
          buttonLeftClassName: "stock-data__button stock-data__button--left",
          buttonRightClassName:
            "stock-data__button stock-data__button--right stock-data__button--selected",
        });
      } else if (
        this.state.loading === "30day" &&
        prevState.loading === "daily"
      ) {
        this.setState({
          buttonLeftClassName:
            "stock-data__button stock-data__button--left stock-data__button--selected",
          buttonRightClassName: "stock-data__button stock-data__button--right",
        });
      }
    }
  }

  handle30DayButton = () => {
    this.setState({
      loading: "30day",
    });
  };

  handleDailyButton = () => {
    this.setState({
      loading: "daily",
    });
  };

  // method to render the line graph when the data
  // is not empty
  renderLineGraph30Day = () => {
    if (this.props.stockData30.length !== 0) {
      return (
        <StockLineGraph
          stockData30={this.props.stockData30}
          stockData30DateLabel={this.props.stockData30DateLabel}
        />
      );
    }
  };

  renderDailyStockPrice = () => {
    if (this.props.stockDailyPrices.length !== 0) {
      return (
        <StockDailyGraph
          stockDailyPrices={this.props.stockDailyPrices}
          stockDailyTimes={this.props.stockDailyTimes}
        />
      );
    }
  };

  render() {
    const {
      companyName,
      companySymbol,
      currentStockPrice,
      stockDate,
      stockOpenPrice,
      stockLowPrice,
      stockHighPrice,
      stockClosingPrice,
      stockVolume,
      stockChange,
    } = this.props;

    return (
      <div className="stock-data">
        <div className="stock-data__top-data-ctn">
          <Card
            style={{ backgroundColor: "#e5e7f0" }}
            className="stock-data__section-results"
          >
            <CardContent>
              <h2>
                {companyName} {currentStockPrice}
              </h2>
            </CardContent>

            {/* </div> */}
          </Card>

          <div className="stock-data__data-ctn">
            <Card
              className="stock-data__col stock-data__col--col1"
              style={{ backgroundColor: "#e5e7f0" }}
            >
              <CardContent>
                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">Symbol</h3>
                  <h3>{companySymbol}</h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">Date</h3>
                  <h3>{stockDate}</h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">Open</h3>
                  <h3>{stockOpenPrice}</h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">Low</h3>
                  <h3>{stockLowPrice}</h3>
                </div>
              </CardContent>
            </Card>

            <Card
              className="stock-data__col stock-data__col--col2"
              style={{ backgroundColor: "#e5e7f0" }}
            >
              <CardContent>
                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">High</h3>
                  <h3>{stockHighPrice}</h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">Close</h3>
                  <h3>{stockClosingPrice}</h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">Volume</h3>
                  <h3>{stockVolume}</h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3 className="stock-data__data-label">Change</h3>
                  <h3>{stockChange}</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="stock-data__tab-ctn">
          <div className="stock-data__button-ctn">
            <button
              onClick={this.handle30DayButton}
              className={this.state.buttonLeftClassName}
            >
              Past 30 Days
            </button>
            <button
              onClick={this.handleDailyButton}
              className={this.state.buttonRightClassName}
            >
              Daily Stock Tracker
            </button>
          </div>

          <div className="stock-data__graph-ctn">
            {this.state.loading === "30day" && this.renderLineGraph30Day()}
            {this.state.loading === "daily" && this.renderLineGraph30Day()}
          </div>
        </div>
      </div>
    );
  }
}

export default StockData;
