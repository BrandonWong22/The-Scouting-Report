interface LoginPageState {
  isSignedIn: Boolean;
  profileData: String | null;
  loadLoginPage: Boolean;
  loadRegisterPage: Boolean;
  userEmail: String | null;
  userPassword: String | null;
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
