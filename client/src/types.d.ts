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
}
