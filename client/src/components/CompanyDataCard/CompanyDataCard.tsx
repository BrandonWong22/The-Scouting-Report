import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import "./CompanyDataCard.scss";

interface CompanyDataCardProps {
  title: string;
  datesArr: Array<string>;
  dataArr: Array<number>;
}

const CompanyDataCard: React.FC<CompanyDataCardProps> = (props) => {
  const { title, datesArr, dataArr } = props;

  let dataObj: object = {};

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
      <Card
        style={{ backgroundColor: "#e5e7f0" }}
        className="financial__card-comp"
      >
        <CardContent>
          <h3 className="financial__card-title">{title}</h3>

          {Object.keys(dataObj).map((keyName, i) => (
            <div key={i} className="financial__data-ctn">
              <p>{keyName}</p>
              <p>
                {(dataObj[keyName] * 100000)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default CompanyDataCard;
