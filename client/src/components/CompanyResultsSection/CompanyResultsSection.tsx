import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./CompanyResultsSection.scss";
import StockData from "../StocksData/StockData";
import FinancialStatement from "../FinancialStatement/FinancialStatement";
import ClipLoader from "react-spinners/ClipLoader";

const CompanyResultsSection: React.FC<CompanyResultsProps> = ({
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
  dailyStockPriceDate,
  lastUpdatedDate,
}) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

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
          selectedIndex={tabIndex}
          onSelect={(tabIndex: number) => setTabIndex(tabIndex)}
          className="react-tabs"
        >
          <TabList className="react-tabs__tab-list">
            {/* CONDITIONS TO RENDER THE STOCKS TAB WITH THE DARK MODE TAB */}
            {darkMode && tabIndex === 0 && (
              <Tab
                style={{ backgroundColor: "#1a1919" }}
                className="react-tabs__tab"
              >
                Stocks
              </Tab>
            )}
            {!darkMode && tabIndex === 0 && (
              <Tab
                style={{ backgroundColor: "#fff" }}
                className="react-tabs__tab"
              >
                Stocks
              </Tab>
            )}
            {tabIndex === 1 && (
              <Tab
                style={{ backgroundColor: "transparent" }}
                className="react-tabs__tab"
              >
                Stocks
              </Tab>
            )}
            {/* CONDITIONS TO RENDER THE STATEMENTS TAB WITH THE DARK MODE TAB */}
            {darkMode && tabIndex === 1 && (
              <Tab
                style={{ backgroundColor: "#1a1919" }}
                className="react-tabs__tab"
              >
                Financial Statement
              </Tab>
            )}
            {!darkMode && tabIndex === 1 && (
              <Tab
                style={{ backgroundColor: "#fff" }}
                className="react-tabs__tab"
              >
                Financial Statement
              </Tab>
            )}
            {tabIndex === 0 && (
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
              dailyStockPriceDate={dailyStockPriceDate}
              lastUpdatedDate={lastUpdatedDate}
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
};

export default CompanyResultsSection;
