import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import "./CompanyDataCard.scss";
import Collapsible from "react-collapsible";

interface CompanyDataCardProps {
  title: string;
  datesArr: Array<string>;
  dataArr: Array<number>;
}

const CompanyDataCard: React.FC<CompanyDataCardProps> = (props) => {
  const { title, datesArr, dataArr } = props;

  let dataObj: object = { Date: "In Billions" };

  //create an object to hold the date and data prop to be rendered
  //ex: {date: $$$}
  datesArr
    .slice()
    .reverse()
    .forEach(
      (key: string, i: number) => (dataObj[key] = dataArr.slice().reverse()[i])
    );

  return (
    <>
      <Card style={{ backgroundColor: "#e5e7f0" }} className="financial-card">
        <CardContent>
          <Collapsible
            trigger={title}
            classParentString="collapsible__financial-section"
          >
            {/* <h2 className="financial-card__title">{title}</h2> */}
            {Object.keys(dataObj).map((keyName, i) => (
              <div key={i} className="financial-card__data-ctn">
                <p>{keyName}</p>
                <p>
                  {dataObj[keyName]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            ))}
          </Collapsible>
          <div className="financial-card__desktop-section">
            <h2 className="financial-card__title">{title}</h2>
            {Object.keys(dataObj).map((keyName, i) => (
              <div key={i} className="financial-card__data-ctn">
                <p>{keyName}</p>
                <p>
                  {dataObj[keyName]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CompanyDataCard;
