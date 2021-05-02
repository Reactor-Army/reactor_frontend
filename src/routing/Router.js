import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {HomeRoute} from "./routes/HomeRoute";
import {AdsorbatesRoute} from "./routes/AdsorbatesRoute";
import {AdsorbentsRoute} from "./routes/AdsorbentsRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/adsorbatos"} component={AdsorbatesRoute} />
        <Route path={"/adsorbentes"} component={AdsorbentsRoute} />
        <Route path={"/"} component={HomeRoute} />
      </Switch>
    </BrowserRouter>
  );
};
