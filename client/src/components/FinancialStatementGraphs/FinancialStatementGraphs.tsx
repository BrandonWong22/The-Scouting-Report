import React, { Component } from "react";
import "./FinancialStatementGraphs.scss";
import CompanyDataCardList from "../ComapnyDataCardList/CompanyDataCardList";
import FinancialLineGraph from "../FinancialLineGraph/FinancialLineGraph";
import FinancialBarGraph from "../FinanacialBarGraph/FinancialBarGraph";
import FinancialRadarGraph from "../FinancialRadarGraph/FinancialRadarGraph";
import ClipLoader from "react-spinners/ClipLoader";

interface FinancialStatementGraphsProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
  darkMode: Boolean;
  title: string;
}

interface FinancialStatementGraphsState {
  buttonLine: string;
  buttonBar: string;
  buttonRadar: string;
  buttonFinancials: string;
  loadingState: string;
}

class FinancialStatementGraphs extends Component<
  FinancialStatementGraphsProps,
  FinancialStatementGraphsState
> {
  state = {
    buttonLine: "data__button data__button--line data__button--selected",
    buttonBar: "data__button data__button--bar",
    buttonRadar: "data__button data__button--radar",
    buttonFinancials: "data__button data__button--financials",
    loadingState: "line",
  };

  componentDidUpdate(_: any, prevState: { loadingState: string }) {
    if (this.state.loadingState !== prevState.loadingState) {
      if (this.state.loadingState === "line") {
        this.setState({
          buttonLine: "data__button data__button--line data__button--selected",
          buttonBar: "data__button data__button--bar",
          buttonRadar: "data__button data__button--radar",
          buttonFinancials: "data__button data__button--financials",
        });
      } else if (this.state.loadingState === "bar") {
        this.setState({
          buttonLine: "data__button data__button--line",
          buttonBar: "data__button data__button--bar data__button--selected",
          buttonRadar: "data__button data__button--radar",
          buttonFinancials: "data__button data__button--financials",
        });
      } else if (this.state.loadingState === "radar") {
        this.setState({
          buttonLine: "data__button data__button--line",
          buttonBar: "data__button data__button--bar",
          buttonRadar:
            "data__button data__button--radar data__button--selected",
          buttonFinancials: "data__button data__button--financials",
        });
      } else if (this.state.loadingState === "financials") {
        this.setState({
          buttonLine: "data__button data__button--line",
          buttonBar: "data__button data__button--bar",
          buttonRadar: "data__button data__button--radar",
          buttonFinancials:
            "data__button data__button--financials data__button--selected",
        });
      }
    }
  }

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
          title={this.props.title}
          color={this.props.darkMode ? "#999" : "#C0C0C0"}
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
          title={this.props.title}
          color={this.props.darkMode ? "#999" : "#C0C0C0"}
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
          title={this.props.title}
          color={this.props.darkMode ? "#999" : "#C0C0C0"}
          backDrop={this.props.darkMode ? "#1a1919" : "#fff"}
        />
      );
    }
  };

  handleLineButtonClick = () => {
    this.setState({
      loadingState: "line",
    });
  };

  handleBarButtonClick = () => {
    this.setState({
      loadingState: "bar",
    });
  };

  handleRadarButtonClick = () => {
    this.setState({
      loadingState: "radar",
    });
  };

  handleFinancialsButtonClick = () => {
    this.setState({
      loadingState: "financials",
    });
  };

  render() {
    const { darkMode } = this.props;

    return (
      <>
        <div className="data__button-ctn">
          <button
            onClick={this.handleLineButtonClick}
            className={
              darkMode
                ? this.state.buttonLine + " data__button--dark"
                : this.state.buttonLine + " data__button--light"
            }
          >
            Line Graph
          </button>
          <button
            onClick={this.handleBarButtonClick}
            className={
              darkMode
                ? this.state.buttonBar + " data__button--dark"
                : this.state.buttonBar + " data__button--light"
            }
          >
            Bar Graph
          </button>
          <button
            onClick={this.handleRadarButtonClick}
            className={
              darkMode
                ? this.state.buttonRadar + " data__button--dark"
                : this.state.buttonRadar + " data__button--light"
            }
          >
            Radar Graph
          </button>
          <button
            onClick={this.handleFinancialsButtonClick}
            className={
              darkMode
                ? this.state.buttonFinancials + " data__button--dark"
                : this.state.buttonFinancials + " data__button--light"
            }
          >
            Financial Statement
          </button>
        </div>
        <div className="data__graph-ctn">
          {this.props.financialsRevenue.length === 0 && (
            <div className="data__loader">
              <ClipLoader size={100} color={"steelblue"} loading={true} />
            </div>
          )}
          {this.state.loadingState === "line" && this.renderLineGraph()}
          {this.state.loadingState === "bar" && this.renderBarGraph()}
          {this.state.loadingState === "radar" && this.renderRadarGraph()}
          {this.state.loadingState === "financials" && (
            <CompanyDataCardList
              financialsDates={this.props.financialsDates}
              financialsRevenue={this.props.financialsRevenue}
              financialsCostOfRevenue={this.props.financialsCostOfRevenue}
              financialsGrossProfit={this.props.financialsGrossProfit}
              financialsNetIncome={this.props.financialsNetIncome}
              financialsCostAndExpenses={this.props.financialsCostAndExpenses}
              financialsOperatingExpenses={
                this.props.financialsOperatingExpenses
              }
              darkMode={this.props.darkMode}
            />
          )}
        </div>
      </>
    );
  }
}

export default FinancialStatementGraphs;
