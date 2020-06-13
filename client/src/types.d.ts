interface LoginPageProps {
  history: any;
}

interface LoginPageState {
  isSignedIn: Boolean;
}

interface SearchProps {
  history: any;
}

interface SearchState {
  validateSearch: Boolean;
  reportIsReady: Boolean;
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
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
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
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
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
}
