import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./CompanyResultsSection.scss";
import StockData from "../StocksData/StockData";
import FinancialStatement from "../FinancialStatement/FinancialStatement";

interface CompanyResultsProps {}

interface CompanyResultsState {
  tabIndex: number;
}

class CompanyResultsSection extends Component<
  CompanyResultsProps,
  CompanyResultsState
> {
  state = {
    tabIndex: 0,
  };

  render() {
    return (
      <div className="company-results">
        <div className="company-results__ctn">
          <div className="company-results__top-ctn">
            <h1 className="company-results__results-header">Results</h1>
            {/* ADD TOGGLE  */}
          </div>
          <div className="company-results__tabs-ctn">
            <Tabs
              selectedIndex={this.state.tabIndex}
              onSelect={(tabIndex: number) => this.setState({ tabIndex })}
              className="react-tabs"
            >
              <TabList className="react-tabs__tab-list">
                <Tab className="react-tabs__tab">Stocks</Tab>
                <Tab>Financial Statement</Tab>
              </TabList>
              <TabPanel className="react-tab__tab-panel">
                <StockData />
              </TabPanel>
              <TabPanel className="react-tab__tab-panel">
                <FinancialStatement />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyResultsSection;
