import React, { useState } from "react";
import "./Error.scss";
import { Redirect } from "react-router-dom";

const Error: React.FC = () => {
  //declare component state with useState
  const [redirect, setRedirect] = useState<Boolean>(false);

  if (!redirect) {
    return (
      <div className="error">
        <div className="error__content-block">
          <h1>Sorry... This page does not exist!!!</h1>
          <button onClick={() => setRedirect(true)}>Return Home</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="error">
        <Redirect to={"/"} />
      </div>
    );
  }
};

export default Error;
