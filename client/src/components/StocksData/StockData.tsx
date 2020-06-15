import React from "react";
import "./StockData.scss";
import StockLineGraph from "../StockLineGraph/StockLineGraph";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

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
      <div className="stock-data__top-data-ctn">
        <Card
          style={{ backgroundColor: "#e5e7f0" }}
          className="stock-data__section-results"
        >
          <CardContent>
            <h2>
              {companyName} {currentStockPrice}
            </h2>
          </CardContent>

          {/* </div> */}
        </Card>

        <div className="stock-data__data-ctn">
          <Card
            className="stock-data__col stock-data__col--col1"
            style={{ backgroundColor: "#e5e7f0" }}
          >
            <CardContent>
              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">Symbol</h3>
                <h3>{companySymbol}</h3>
              </div>

              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">Date</h3>
                <h3>{stockDate}</h3>
              </div>

              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">Open</h3>
                <h3>{stockOpenPrice}</h3>
              </div>

              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">Low</h3>
                <h3>{stockLowPrice}</h3>
              </div>
            </CardContent>
          </Card>

          <Card
            className="stock-data__col stock-data__col--col2"
            style={{ backgroundColor: "#e5e7f0" }}
          >
            <CardContent>
              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">High</h3>
                <h3>{stockHighPrice}</h3>
              </div>

              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">Close</h3>
                <h3>{stockClosingPrice}</h3>
              </div>

              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">Volume</h3>
                <h3>{stockVolume}</h3>
              </div>

              <div className="stock-data__section-ctn">
                <h3 className="stock-data__data-label">Change</h3>
                <h3>{stockChange}</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="stock-data__graph-ctn">{renderLineGraph()}</div>
    </div>
  );
};

export default StockData;
