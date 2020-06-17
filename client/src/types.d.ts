interface LoginPageProps {
  history: any;
}

interface LoginPageState {
  isSignedIn: Boolean;
}

interface SearchProps {
  history: any;
  location: any;
}

interface SearchState {
  validateSearch: Boolean;
  signedIn: Boolean;
  redirect: Boolean;
  companySymbol: String;
  allCompaniesFireBase: Array;
}

interface SearchBarProps {
  handleSearchSubmit(search: string, event: React.FormEvent<HTMLInputElement>);
  allCompaniesFireBase: Array;
}

interface ISearchBarState {
  searchValue: string;
}

interface ResultsProps {
  passedDownProps: Array;
  location: any;
  history: any;
  match: any;
}

interface ResultsState {
  companySymbol: String;
  companyName: String;
  companyExchange: String;
  companyIndustry: String;
  companyWebsite: String;
  companyCEO: String;
  companyDescription: String;
  loading: Boolean;
  currentStockPrice: String;
  socket: any;
  stockDate: string;
  stockOpenPrice: number | null;
  stockLowPrice: number | null;
  stockHighPrice: number | null;
  stockClosingPrice: number | null;
  stockVolume: number | null;
  stockChange: number | null;
  stockData30: Array<number>;
  stockData30DateLabel: Array<string>;
  stockDailyPrices: Array<number>;
  stockDailyTimes: Array<string>;
}

interface CompanyInfoProps {
  companySymbol: string;
  companyName: string;
  companyExchange: string;
  companyIndustry: string;
  companyWebsite: string;
  companyCEO: string;
  companyDescription?: string;
  history: any;
}

interface CompanyResultsProps {
  companyName: string;
  companySymbol: string;
  currentStockPrice: string;
  stockDate: string;
  stockOpenPrice: number | null;
  stockLowPrice: number | null;
  stockHighPrice: number | null;
  stockClosingPrice: number | null;
  stockVolume: number | null;
  stockChange: number | null;
  stockData30: Array<number>;
  stockData30DateLabel: Array<string>;
  stockDailyPrices: Array<number>;
  stockDailyTimes: Array<string>;
}

interface CompanyResultsState {
  tabIndex: number;
}

interface StockDataProps {
  companyName: string;
  companySymbol: string;
  currentStockPrice: string;
  stockDate: string;
  stockOpenPrice: number | null;
  stockLowPrice: number | null;
  stockHighPrice: number | null;
  stockClosingPrice: number | null;
  stockVolume: number | null;
  stockChange: number | null;
  stockData30: Array<number>;
  stockData30DateLabel: Array<string>;
  stockDailyPrices: Array<number>;
  stockDailyTimes: Array<string>;
}

interface StockDataStates {
  loading: string;
  buttonLeftClassName: string;
  buttonRightClassName: string;
}

interface FinancialStatementProps {
  companySymbol: string;
}

interface FinancialStatementState {
  tabIndex: number;
  loading: string;
  buttonLine: string;
  buttonBar: string;
  buttonRadar: string;
  buttonFinancials: string;
  annual: boolean;
  quarterlyClassName: string;
  annualClassName: string;
  financialsAnnualDates: Array<string>;
  financialsAnnualRevenue: Array<number>;
  financialsAnnualCostOfRevenue: Array<number>;
  financialsAnnualGrossProfit: Array<number>;
  financialsAnnualNetIncome: Array<number>;
  financialsAnnualCostAndExpenses: Array<number>;
  financialsAnnualOperatingExpenses: Array<number>;
  financialsQuarterlyDates: Array<string>;
  financialsQuarterlyRevenue: Array<number>;
  financialsQuarterlyCostOfRevenue: Array<number>;
  financialsQuarterlyGrossProfit: Array<number>;
  financialsQuarterlyNetIncome: Array<number>;
  financialsQuarterlyCostAndExpenses: Array<number>;
  financialsQuarterlyOperatingExpenses: Array<number>;
}

interface FinancialLineGraphProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
  title: string;
}

interface FinancialBarGraphProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
  title: string;
}

interface FinancialRadarGraphProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
  title: string;
}
