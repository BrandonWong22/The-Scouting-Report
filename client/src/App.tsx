import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";
import Results from "./pages/Results/Results";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/search" exact component={Search} />
          <Route path="/results/:id" component={Results} />
          <Route path="*" exact={true} component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
