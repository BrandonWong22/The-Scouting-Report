interface SearchState {
  validateSearch: Boolean;
  reportIsReady: Boolean;
  allCompanies: Array<string>;
}

interface SearchBarProps {
  handleSearchSubmit(search: string, event: React.FormEvent<HTMLInputElement>);
}

interface ISearchBarState {
  searchValue: string;
}
