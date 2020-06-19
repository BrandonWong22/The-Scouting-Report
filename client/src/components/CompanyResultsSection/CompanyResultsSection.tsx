import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./CompanyResultsSection.scss";
import StockData from "../StocksData/StockData";
import FinancialStatement from "../FinancialStatement/FinancialStatement";
// import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

class CompanyResultsSection extends Component<
  CompanyResultsProps,
  CompanyResultsState
> {
  state = {
    tabIndex: 0,
    stocksClassName: "react-tabs__tab",
    statementClassName: "react-tabs__tab",
  };

  // componentDidUpdate(_: any, prevState: { tabIndex: number }) {}

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
      stockData30,
      stockData30DateLabel,
      stockDailyPrices,
      stockDailyTimes,
      darkMode,
    } = this.props;

    if (currentStockPrice === "" || stockData30.length === 0) {
      //&& stockData30.length === 0 check why this doesnt work
      return (
        <div className="company-results company-results--loading">
          <div className="sweet-loading">
            <ClipLoader size={100} color={"steelblue"} loading={true} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="company-results__tabs-ctn">
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={(tabIndex: number) => this.setState({ tabIndex })}
            className="react-tabs"
          >
            <TabList className="react-tabs__tab-list">
              {/* CONDITIONS TO RENDER THE STOCKS TAB WITH THE DARK MODE TAB */}
              {darkMode && this.state.tabIndex === 0 && (
                <Tab
                  style={{ backgroundColor: "#1a1919" }}
                  className="react-tabs__tab"
                >
                  Stocks
                </Tab>
              )}
              {!darkMode && this.state.tabIndex === 0 && (
                <Tab
                  style={{ backgroundColor: "#fff" }}
                  className="react-tabs__tab"
                >
                  Stocks
                </Tab>
              )}
              {this.state.tabIndex === 1 && (
                <Tab
                  style={{ backgroundColor: "transparent" }}
                  className="react-tabs__tab"
                >
                  Stocks
                </Tab>
              )}
              {/* CONDITIONS TO RENDER THE STATEMENTS TAB WITH THE DARK MODE TAB */}
              {darkMode && this.state.tabIndex === 1 && (
                <Tab
                  style={{ backgroundColor: "#1a1919" }}
                  className="react-tabs__tab"
                >
                  Financial Statement
                </Tab>
              )}
              {!darkMode && this.state.tabIndex === 1 && (
                <Tab
                  style={{ backgroundColor: "#fff" }}
                  className="react-tabs__tab"
                >
                  Financial Statement
                </Tab>
              )}
              {this.state.tabIndex === 0 && (
                <Tab
                  style={{ backgroundColor: "transparent" }}
                  className="react-tabs__tab"
                >
                  Financial Statement
                </Tab>
              )}
            </TabList>
            <TabPanel className="react-tab__tab-panel">
              <StockData
                companyName={companyName}
                companySymbol={companySymbol}
                currentStockPrice={currentStockPrice}
                stockDate={stockDate}
                stockOpenPrice={stockOpenPrice}
                stockLowPrice={stockLowPrice}
                stockHighPrice={stockHighPrice}
                stockClosingPrice={stockClosingPrice}
                stockVolume={stockVolume}
                stockChange={stockChange}
                stockData30={stockData30}
                stockData30DateLabel={stockData30DateLabel}
                stockDailyPrices={stockDailyPrices}
                stockDailyTimes={stockDailyTimes}
                darkMode={darkMode}
              />
            </TabPanel>
            <TabPanel className="react-tab__tab-panel">
              <FinancialStatement
                companySymbol={companySymbol}
                darkMode={darkMode}
              />
            </TabPanel>
          </Tabs>
        </div>
      );
    }
  }
}

export default CompanyResultsSection;
