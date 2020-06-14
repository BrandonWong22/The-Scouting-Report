import React from "react";
import "./StockData.scss";
import StockLineGraph from "../StockLineGraph/StockLineGraph";

const StockData: React.FC<StockDataProps> = (props) => {
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
  } = props;

  // method to render the line graph when the data
  // is not empty
  const renderLineGraph = () => {
    if (stockData30.length !== 0) {
      return (
        <StockLineGraph
          stockData30={stockData30}
          stockData30DateLabel={stockData30DateLabel}
        />
      );
    }
  };

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
            <h3>{stockDate}</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Open</h3>
            <h3>{stockOpenPrice}</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Low</h3>
            <h3>{stockLowPrice}</h3>
          </div>
        </div>

        <div className="stock-data__col stock-data__col--col2">
          <div className="stock-data__section-ctn">
            <h3>High</h3>
            <h3>{stockHighPrice}</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Close</h3>
            <h3>{stockClosingPrice}</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Volume</h3>
            <h3>{stockVolume}</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Change</h3>
            <h3>{stockChange}</h3>
          </div>
        </div>
      </div>

      <div className="stock-data__graph-ctn">{renderLineGraph()}</div>
    </div>
  );
};

export default StockData;
