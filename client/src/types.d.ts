interface SearchState {
  validateSearch: Boolean;
  reportIsReady: Boolean;
  allCompanies: Array<string>;
}

interface SearchBarProps {
  handleSearchSubmit(search: string, event: React.FormEvent<HTMLInputElement>);
  allCompanies: Array<string>;
}

interface ISearchBarState {
  searchValue: string;
}
