import React from "react";
import CompanyDataCard from "../CompanyDataCard/CompanyDataCard";
import "./ComapnyDataCardList.scss";

interface CompanyDataCardList {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
}

const CompanyDataCardList: React.FC<CompanyDataCardList> = (props) => {
  const {
    financialsDates,
    financialsRevenue,
    financialsCostOfRevenue,
    financialsGrossProfit,
    financialsNetIncome,
    financialsCostAndExpenses,
    financialsOperatingExpenses,
  } = props;

  return (
    <div className="card-list">
      <div className="card-list__col">
        <div>
          <CompanyDataCard
            title={"Total Revenue"}
            datesArr={financialsDates}
            dataArr={financialsRevenue}
          />
        </div>
        <div>
          <CompanyDataCard
            title={"Cost of Revenue"}
            datesArr={financialsDates}
            dataArr={financialsCostOfRevenue}
          />
        </div>
        <div className="card-list__card-desktop">
          <CompanyDataCard
            title={"Cost and Expenses"}
            datesArr={financialsDates}
            dataArr={financialsCostAndExpenses}
          />
        </div>
      </div>
      <div className="card-list__col">
        <div>
          <CompanyDataCard
            title={"Gross Profit"}
            datesArr={financialsDates}
            dataArr={financialsGrossProfit}
          />
        </div>
        <div>
          <CompanyDataCard
            title={"Net Income"}
            datesArr={financialsDates}
            dataArr={financialsNetIncome}
          />
        </div>
        <div className="card-list__card-desktop">
          <CompanyDataCard
            title={"Operating Expenses"}
            datesArr={financialsDates}
            dataArr={financialsOperatingExpenses}
          />
        </div>
      </div>
      <div className="card-list__col card-list__col--mobile">
        <div>
          <CompanyDataCard
            title={"Cost and Expenses"}
            datesArr={financialsDates}
            dataArr={financialsCostAndExpenses}
          />
        </div>
        <div>
          <CompanyDataCard
            title={"Operating Expenses"}
            datesArr={financialsDates}
            dataArr={financialsOperatingExpenses}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyDataCardList;
