import React from "react";
import CompanyDataCard from "../CompanyDataCard/CompanyDataCard";
import "./ComapnyDataCardList.scss";

interface CompanyDataCardListProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
  darkMode: Boolean;
}

const CompanyDataCardList: React.FC<CompanyDataCardListProps> = (props) => {
  const {
    financialsDates,
    financialsRevenue,
    financialsCostOfRevenue,
    financialsGrossProfit,
    financialsNetIncome,
    financialsCostAndExpenses,
    financialsOperatingExpenses,
    darkMode,
  } = props;

  return (
    <div className="card-list">
      <div className="card-list__col">
        <div>
          <CompanyDataCard
            title={"Total Revenue"}
            datesArr={financialsDates}
            dataArr={financialsRevenue}
            darkMode={darkMode}
          />
        </div>
        <div>
          <CompanyDataCard
            title={"Cost of Revenue"}
            datesArr={financialsDates}
            dataArr={financialsCostOfRevenue}
            darkMode={darkMode}
          />
        </div>
        <div className="card-list__card-desktop">
          <CompanyDataCard
            title={"Cost and Expenses"}
            datesArr={financialsDates}
            dataArr={financialsCostAndExpenses}
            darkMode={darkMode}
          />
        </div>
      </div>
      <div className="card-list__col">
        <div>
          <CompanyDataCard
            title={"Gross Profit"}
            datesArr={financialsDates}
            dataArr={financialsGrossProfit}
            darkMode={darkMode}
          />
        </div>
        <div>
          <CompanyDataCard
            title={"Net Income"}
            datesArr={financialsDates}
            dataArr={financialsNetIncome}
            darkMode={darkMode}
          />
        </div>
        <div className="card-list__card-desktop">
          <CompanyDataCard
            title={"Operating Expenses"}
            datesArr={financialsDates}
            dataArr={financialsOperatingExpenses}
            darkMode={darkMode}
          />
        </div>
      </div>
      <div className="card-list__col card-list__col--mobile">
        <div>
          <CompanyDataCard
            title={"Cost and Expenses"}
            datesArr={financialsDates}
            dataArr={financialsCostAndExpenses}
            darkMode={darkMode}
          />
        </div>
        <div>
          <CompanyDataCard
            title={"Operating Expenses"}
            datesArr={financialsDates}
            dataArr={financialsOperatingExpenses}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyDataCardList;
