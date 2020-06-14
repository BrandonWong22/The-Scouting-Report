import React from "react";
import CompanyDataCard from "../CompanyDataCard/CompanyDataCard";

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
        <CompanyDataCard
          title={"Total Revenue"}
          datesArr={financialsDates}
          dataArr={financialsRevenue}
        />
        {/* <CompanyDataCard
          title={"Cost of Revenue"}
          datesArr={financialsDates}
          dataArr={financialsCostOfRevenue}
        /> */}
      </div>
      <div className="card-list__col">
        {/* <CompanyDataCard
          title={"Gross Profit"}
          datesArr={financialsDates}
          dataArr={financialsGrossProfit}
        />
        <CompanyDataCard
          title={"Net Income"}
          datesArr={financialsDates}
          dataArr={financialsNetIncome}
        /> */}
      </div>
      <div className="card-list__col">
        {/* <CompanyDataCard
          title={"Cost and Expenses"}
          datesArr={financialsDates}
          dataArr={financialsCostAndExpenses}
        />
        <CompanyDataCard
          title={"Operating Expenses"}
          datesArr={financialsDates}
          dataArr={financialsOperatingExpenses}
        /> */}
      </div>
    </div>
  );
};

export default CompanyDataCardList;
