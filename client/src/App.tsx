import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";
import Results from "./pages/Results/Results";

//CHANGE ROUTES WHEN OTHER PAGES ARE READY
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/results" exact component={Results} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
