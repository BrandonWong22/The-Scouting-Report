import React, { Component } from "react";
import "./StockData.scss";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import StockLineGraph from "../StockLineGraph/StockLineGraph";

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
          stockData={this.props.stockData30}
          stockDataDateLabel={this.props.stockData30DateLabel}
          color={this.props.darkMode ? "#999" : "#C0C0C0"}
          title="Stock Prices for the Past 30 Days"
          timeScaleTitle={"Date in (YYYY-MM-DD)"}
        />
      );
    }
  };

  renderDailyStockPrice = () => {
    if (this.props.stockDailyPrices.length !== 0) {
      return (
        <StockLineGraph
          stockData={this.props.stockDailyPrices}
          stockDataDateLabel={this.props.stockDailyTimes}
          color={this.props.darkMode ? "#999" : "#C0C0C0"}
          title="Daily Stock Price Tracker"
          timeScaleTitle="Time in Military Time"
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
      darkMode,
    } = this.props;

    return (
      <div className="stock-data">
        <div className="stock-data__top-data-ctn">
          <Card
            style={
              darkMode
                ? { backgroundColor: "#525252" }
                : { backgroundColor: "#e5e7f0" }
            }
            className="stock-data__section-results"
          >
            <CardContent>
              <h2
                className={
                  darkMode
                    ? "stock-data__data-label stock-data__data-label--dark"
                    : "stock-data__data-label stock-data__data-label--light"
                }
              >
                {companyName} {currentStockPrice}
              </h2>
            </CardContent>
          </Card>

          <div className="stock-data__data-ctn">
            <Card
              className="stock-data__col stock-data__col--col1"
              style={
                darkMode
                  ? { backgroundColor: "#525252" }
                  : { backgroundColor: "#e5e7f0" }
              }
            >
              <CardContent>
                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    Symbol
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {companySymbol}
                  </h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    Date
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {stockDate}
                  </h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    Open
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {stockOpenPrice}
                  </h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    Low
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {stockLowPrice}
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card
              className="stock-data__col stock-data__col--col2"
              style={
                darkMode
                  ? { backgroundColor: "#525252" }
                  : { backgroundColor: "#e5e7f0" }
              }
            >
              <CardContent>
                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    High
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {stockHighPrice}
                  </h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    Close
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {stockClosingPrice}
                  </h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    Volume
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {stockVolume}
                  </h3>
                </div>

                <div className="stock-data__section-ctn">
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-label stock-data__data-label--dark"
                        : "stock-data__data-label stock-data__data-label--light"
                    }
                  >
                    Change
                  </h3>
                  <h3
                    className={
                      darkMode
                        ? "stock-data__data-text stock-data__data-text--dark"
                        : "stock-data__data-text stock-data__data-text--light"
                    }
                  >
                    {stockChange}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="stock-data__tab-ctn">
          <div className="stock-data__button-ctn">
            <button
              onClick={this.handle30DayButton}
              className={
                darkMode
                  ? this.state.buttonLeftClassName + " stock-data__button--dark"
                  : this.state.buttonLeftClassName +
                    " stock-data__button--light"
              }
            >
              Past 30 Days
            </button>
            <button
              onClick={this.handleDailyButton}
              className={
                darkMode
                  ? this.state.buttonRightClassName +
                    " stock-data__button--dark"
                  : this.state.buttonRightClassName +
                    " stock-data__button--light"
              }
            >
              Daily Stock Tracker
            </button>
          </div>

          <div className="stock-data__graph-ctn">
            {this.state.loading === "30day" && this.renderLineGraph30Day()}
            {this.state.loading === "daily" && this.renderDailyStockPrice()}
          </div>
        </div>
      </div>
    );
  }
}

export default StockData;
