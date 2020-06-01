import React from "react";
import "./SearchIntro.scss";

const SearchIntro: React.FC = () => {
  return (
    <div className="search__intro-text">
      <h1 className="search__header">The Scouting Report</h1>
      <p className="search__paragraph">
        Tired of stocks apps not being fully transparent with the data on their
        app?
      </p>
      <p className="search__paragraph">
        Quickly look up any publicly traded US company to view their current and
        past stock prices and financal history.
      </p>
      <p className="search__paragraph">
        Feel confident in the company that you decide to invest in by fully
        understand how they have performed financally
      </p>
    </div>
  );
};

export default SearchIntro;
