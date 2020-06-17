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
      stockData30,
      stockData30DateLabel,
      stockDailyPrices,
      stockDailyTimes,
      darkMode,
    } = this.props;
    console.log(darkMode);

    if (currentStockPrice === "") {
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
              <Tab
                // className="react-tabs__tab"
                className={
                  darkMode
                    ? "react-tabs__tab--dark react-tabs__tab"
                    : "react-tabs__tab--light react-tabs__tab"
                }
              >
                Stocks
              </Tab>
              <Tab
                className={
                  darkMode
                    ? "react-tabs__tab--dark react-tabs__tab"
                    : "react-tabs__tab--light react-tabs__tab"
                }
              >
                Financial Statement
              </Tab>
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
              <FinancialStatement companySymbol={companySymbol} />
            </TabPanel>
          </Tabs>
        </div>
      );
    }
  }
}

export default CompanyResultsSection;
