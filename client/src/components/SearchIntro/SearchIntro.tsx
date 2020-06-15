import React from "react";
import "./SearchIntro.scss";

const SearchIntro: React.FC = () => {
  return (
    <div className="search__intro-text">
      <h1 className="search__header">The Scouting Report</h1>
      <p className="search__paragraph">
        Quickly look up any publicly traded US company to view their current and
        past stock prices and financal history.
      </p>
    </div>
  );
};

export default SearchIntro;
