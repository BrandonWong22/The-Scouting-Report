import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";

//CHANGE ROUTES WHEN OTHER PAGES ARE READY
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Search} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
