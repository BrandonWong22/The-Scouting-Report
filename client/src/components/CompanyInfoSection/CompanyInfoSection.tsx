import React from "react";
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

const CompanyInfoSection: React.FC<CompanyInfoProps> = (props) => {
  const {
    companySymbol,
    companyName,
    companyExchange,
    companyIndustry,
    companyWebsite,
    companyCEO,
    darkMode,
  } = props;

  const handleLogout = () => {
    firebase.auth().signOut();
    props.history.push({
      pathname: "/",
    });
  };

  return (
    <div
      className={
        darkMode
          ? "company-info company-info--dark"
          : "company-info company-info--light"
      }
    >
      <Collapsible trigger={companyName} classParentString="collapse">
        <div className="company-info__info-ctn">
          <div className="company-info__icon-ctn">
            <FontAwesomeIcon icon={faBuilding} className="company-info__icon" />
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
            <FontAwesomeIcon icon={faIndustry} className="company-info__icon" />
          </div>
          <p>{companyIndustry}</p>
        </div>

        <div className="company-info__info-ctn">
          <div className="company-info__icon-ctn">
            <FontAwesomeIcon icon={faIdBadge} className="company-info__icon" />
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
          <a
            className={
              darkMode
                ? "company-info__href company-info__href--dark"
                : "company-info__href company-info__href--light"
            }
            href={companyWebsite}
          >
            {companyWebsite}
          </a>
        </div>

        <div className="company-info__logout-btn-ctn">
          <button
            onClick={handleLogout}
            className={
              darkMode
                ? "company-info__logout-button company-info__logout-button--dark"
                : "company-info__logout-button company-info__logout-button--light"
            }
          >
            Logout
          </button>
        </div>
      </Collapsible>

      <div className="company-info__tablet-mode">
        <div
          className={
            darkMode
              ? "company-info__company-name-ctn company-info__company-name-ctn--dark"
              : "company-info__company-name-ctn company-info__company-name-ctn--light"
          }
        >
          <h1
            className="compamy-info__company-name"
            style={{ fontSize: "3rem" }}
          >
            {companyName}
          </h1>
        </div>

        <div className="company-info__info-ctn">
          <div className="company-info__icon-ctn">
            <FontAwesomeIcon icon={faBuilding} className="company-info__icon" />
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
            <FontAwesomeIcon icon={faIndustry} className="company-info__icon" />
          </div>
          <p>{companyIndustry}</p>
        </div>

        <div className="company-info__info-ctn">
          <div className="company-info__icon-ctn">
            <FontAwesomeIcon icon={faIdBadge} className="company-info__icon" />
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
          <a
            className={
              darkMode
                ? "company-info__href company-info__href--dark"
                : "company-info__href company-info__href--light"
            }
            href={companyWebsite}
          >
            {companyWebsite}
          </a>
        </div>

        <div className="company-info__logout-btn-ctn">
          <button
            onClick={handleLogout}
            className={
              darkMode
                ? "company-info__logout-button company-info__logout-button--dark"
                : "company-info__logout-button company-info__logout-button--light"
            }
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoSection;
