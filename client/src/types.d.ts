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
  allCompanies: Array<string>;
  redirect: Boolean;
  companySymbol: String;
}

interface SearchBarProps {
  handleSearchSubmit(search: string, event: React.FormEvent<HTMLInputElement>);
  allCompanies: Array<string>;
}

interface ISearchBarState {
  searchValue: string;
}

interface ResultsProps {
  passedDownProps: Array;
}
