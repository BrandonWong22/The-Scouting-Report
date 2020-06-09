import React from "react";
import { Component } from "react";
import "./Results.scss";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

class Results extends Component<ResultsProps, {}> {
  render() {
    // let passedDownProps: any = Object.values(this.props);

    //the company that was selected by the user
    //that has been passed down from the search compopnent
    // let companySymbol: String = passedDownProps[1].state.symbol;

    return <div>results page</div>;
  }
}

export default Results;
