import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";
import Results from "./pages/Results/Results";
import Login from "./pages/Login/Login";

//CHANGE ROUTES WHEN OTHER PAGES ARE READY
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/search" exact component={Search} />
          <Route path="/results" exact component={Results} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
