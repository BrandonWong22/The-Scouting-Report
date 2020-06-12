import React from "react";
import "./StockData.scss";

interface StockDataProps {
  companyName: string;
  companySymbol: string;
  currentStockPrice: string;
  previousOpen?: string;
  previousLow?: string;
  previousHigh?: string;
  previousClose?: string;
  previousVolume?: string;
}

const StockData: React.FC<StockDataProps> = (props) => {
  const { companyName, companySymbol, currentStockPrice } = props;

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
            <h3>Previous Open</h3>
            <h3>$$$</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Previous Low</h3>
            <h3>$$$</h3>
          </div>
        </div>

        <div className="stock-data__col stock-data__col--col2">
          <div className="stock-data__section-ctn">
            <h3>Previous High</h3>
            <h3>$$$</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Previous Close</h3>
            <h3>$$$</h3>
          </div>

          <div className="stock-data__section-ctn">
            <h3>Previous Volume</h3>
            <h3>$$$</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockData;
