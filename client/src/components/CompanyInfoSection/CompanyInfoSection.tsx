import React, { Component } from "react";
import "./CompanyInfoSection.scss";

interface CompanyInfoProps {
  companySymbol: String;
  companyName: String;
  companyExchange: String;
  companyIndustry: String;
  companyWebsite: String;
  companyCEO: String;
}

class CompanyInfoSection extends Component<CompanyInfoProps, {}> {
  render() {
    const {
      companySymbol,
      companyName,
      companyExchange,
      companyIndustry,
      companyWebsite,
      companyCEO,
    } = this.props;
    return (
      <div className="company-info">
        <h1>
          {companyName} | {companySymbol}
        </h1>
        <p>{companyExchange}</p>
        <p>{companyIndustry}</p>
        <p>{companyCEO}</p>
        <p>{companyWebsite}</p>
      </div>
    );
  }
}

export default CompanyInfoSection;
