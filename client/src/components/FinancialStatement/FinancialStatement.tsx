import React, { Component } from "react";
import "./FinancialStatement.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FinancialLineGraph from "../FinancialLineGraph/FinancialLineGraph";
import FinancialBarGraph from "../FinanacialBarGraph/FinancialBarGraph";

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

  render() {
    const {
      financialsDates,
      financialsRevenue,
      financialsCostOfRevenue,
      financialsGrossProfit,
      financialsNetIncome,
      financialsCostAndExpenses,
      financialsOperatingExpenses,
    } = this.props;

    return (
      <div className="financials__data-ctn">
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex: number) => this.setState({ tabIndex })}
          className="react-tabs"
        >
          <TabList className="react-tabs__tab-list">
            <Tab className="react-tabs__tab">Line Graph</Tab>
            <Tab>Bar Graph</Tab>
          </TabList>
          <TabPanel className="react-tab__tab-panel">
            <div className="financials__graph-ctn">
              {financialsRevenue.length && (
                <FinancialLineGraph
                  financialsDates={financialsDates}
                  financialsRevenue={financialsRevenue}
                  financialsCostOfRevenue={financialsCostOfRevenue}
                  financialsGrossProfit={financialsGrossProfit}
                  financialsNetIncome={financialsNetIncome}
                  financialsCostAndExpenses={financialsCostAndExpenses}
                  financialsOperatingExpenses={financialsOperatingExpenses}
                />
              )}
            </div>
          </TabPanel>
          <TabPanel className="react-tab__tab-panel">
            <FinancialBarGraph />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

// const FinancialStatement: React.FC = () => {
//   return <div>FinancialStatement</div>;
// };

export default FinancialStatement;
