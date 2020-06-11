import React, { Component } from "react";
import "./CompanyInfoSection.scss";
import Collapsible from "react-collapsible";
import firebase from "firebase";

class CompanyInfoSection extends Component<CompanyInfoProps, {}> {
  handleLogout = () => {
    firebase.auth().signOut();
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    const {
      companySymbol,
      companyName,
      companyExchange,
      companyIndustry,
      companyWebsite,
      companyCEO,
      // companyDescription,
    } = this.props;
    return (
      <div className="company-info">
        <Collapsible trigger={companyName}>
          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Ticker Symbol: </p>
            <p>{companySymbol}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Exchange: </p>
            <p>{companyExchange}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Industry: </p>
            <p>{companyIndustry}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">CEO: </p>
            <p>{companyCEO}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Website: </p>
            <a href={companyWebsite}>{companyWebsite}</a>
          </div>

          <button
            onClick={this.handleLogout}
            className="company-info__logout-button"
          >
            Logout
          </button>
        </Collapsible>
        <div className="company-info__tablet-mode">
          <div className="company-info__company-name-ctn">
            <h1 className="compamy-info__company-name">{companyName}</h1>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Ticker Symbol: </p>
            <p>{companySymbol}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Exchange: </p>
            <p>{companyExchange}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Industry: </p>
            <p>{companyIndustry}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">CEO: </p>
            <p>{companyCEO}</p>
          </div>

          <div className="company-info__info-ctn">
            <p className="company-info__info-description">Website: </p>
            <a href={companyWebsite}>{companyWebsite}</a>
          </div>

          <button
            onClick={this.handleLogout}
            className="company-info__logout-button"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default CompanyInfoSection;
