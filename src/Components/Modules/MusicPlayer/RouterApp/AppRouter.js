import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../ComponentsPlayers/Home";
import RedirectPage from "../ComponentsPlayers/RedirectPage";
import Dashboard from "../ComponentsPlayers/Dashboard";
import NotFoundPage from "../ComponentsPlayers/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
