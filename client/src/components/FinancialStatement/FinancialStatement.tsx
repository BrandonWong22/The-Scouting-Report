import React, { Component } from "react";
import "./FinancialStatement.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FinancialLineGraph from "../FinancialLineGraph/FinancialLineGraph";
import FinancialBarGraph from "../FinanacialBarGraph/FinancialBarGraph";
import FinancialRadarGraph from "../FinancialRadarGraph/FinancialRadarGraph";
import CompanyDataCardList from "../ComapnyDataCardList/CompanyDataCardList";

interface FinancialStatementProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
}

interface FinancialStatementState {
  tabIndex: number;
}

class FinancialStatement extends Component<
  FinancialStatementProps,
  FinancialStatementState
> {
  state = {
    tabIndex: 0,
  };

  renderLineGraph = () => {
    if (this.props.financialsRevenue.length !== 0) {
      return (
        <FinancialLineGraph
          financialsDates={this.props.financialsDates}
          financialsRevenue={this.props.financialsRevenue}
          financialsCostOfRevenue={this.props.financialsCostOfRevenue}
          financialsGrossProfit={this.props.financialsGrossProfit}
          financialsNetIncome={this.props.financialsNetIncome}
          financialsCostAndExpenses={this.props.financialsCostAndExpenses}
          financialsOperatingExpenses={this.props.financialsOperatingExpenses}
        />
      );
    }
  };

  renderBarGraph = () => {
    if (this.props.financialsRevenue.length !== 0) {
      return (
        <FinancialBarGraph
          financialsDates={this.props.financialsDates}
          financialsRevenue={this.props.financialsRevenue}
          financialsCostOfRevenue={this.props.financialsCostOfRevenue}
          financialsGrossProfit={this.props.financialsGrossProfit}
          financialsNetIncome={this.props.financialsNetIncome}
          financialsCostAndExpenses={this.props.financialsCostAndExpenses}
          financialsOperatingExpenses={this.props.financialsOperatingExpenses}
        />
      );
    }
  };

  renderRadarGraph = () => {
    if (this.props.financialsRevenue.length !== 0) {
      return (
        <FinancialRadarGraph
          financialsDates={this.props.financialsDates}
          financialsRevenue={this.props.financialsRevenue}
          financialsCostOfRevenue={this.props.financialsCostOfRevenue}
          financialsGrossProfit={this.props.financialsGrossProfit}
          financialsNetIncome={this.props.financialsNetIncome}
          financialsCostAndExpenses={this.props.financialsCostAndExpenses}
          financialsOperatingExpenses={this.props.financialsOperatingExpenses}
        />
      );
    }
  };

  render() {
    return (
      <div className="financials__data-ctn">
        <CompanyDataCardList
          financialsDates={this.props.financialsDates}
          financialsRevenue={this.props.financialsRevenue}
          financialsCostOfRevenue={this.props.financialsCostOfRevenue}
          financialsGrossProfit={this.props.financialsGrossProfit}
          financialsNetIncome={this.props.financialsNetIncome}
          financialsCostAndExpenses={this.props.financialsCostAndExpenses}
          financialsOperatingExpenses={this.props.financialsOperatingExpenses}
        />
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex: number) => this.setState({ tabIndex })}
          className="react-tabs"
        >
          <TabList className="react-tabs__tab-list">
            <Tab className="react-tabs__tab">Line Graph</Tab>
            <Tab className="react-tabs__tab">Bar Graph</Tab>
            <Tab className="react-tabs__tab">Radar Graph</Tab>
          </TabList>
          <TabPanel className="react-tab__tab-panel">
            <div className="financials__graph-ctn">
              {this.renderLineGraph()}
            </div>
          </TabPanel>
          <TabPanel className="react-tab__tab-panel">
            <div className="financials__graph-ctn">{this.renderBarGraph()}</div>
          </TabPanel>
          <TabPanel className="react-tab__tab-panel">
            <div className="financials__graph-ctn">
              {this.renderRadarGraph()}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default FinancialStatement;
