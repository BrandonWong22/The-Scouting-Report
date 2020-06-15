import React, { Component } from "react";
import "./CompanyInfoSection.scss";
import Collapsible from "react-collapsible";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faExchangeAlt,
  faIndustry,
  faIdBadge,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

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
        <Collapsible
          trigger={companyName}
          // classParentString="Collapsible__info-section"
        >
          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faBuilding}
                className="company-info__icon"
              />
            </div>
            <p>{companySymbol}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className="company-info__icon"
              />
            </div>
            <p>{companyExchange}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faIndustry}
                className="company-info__icon"
              />
            </div>
            <p>{companyIndustry}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faIdBadge}
                className="company-info__icon"
              />
            </div>
            <p>{companyCEO}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faWindowRestore}
                className="company-info__icon"
              />
            </div>
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
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faBuilding}
                className="company-info__icon"
              />
            </div>
            <p>{companySymbol}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className="company-info__icon"
              />
            </div>

            <p>{companyExchange}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faIndustry}
                className="company-info__icon"
              />
            </div>
            <p>{companyIndustry}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faIdBadge}
                className="company-info__icon"
              />
            </div>
            <p>{companyCEO}</p>
          </div>

          <div className="company-info__info-ctn">
            <div className="company-info__icon-ctn">
              <FontAwesomeIcon
                icon={faWindowRestore}
                className="company-info__icon"
              />
            </div>
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
