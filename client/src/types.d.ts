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
