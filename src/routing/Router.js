import {BrowserRouter, Switch} from "react-router-dom";
import React from "react";
import {HomeRoute} from "./routes/HomeRoute";
import {AdsorbatesRoute} from "./routes/AdsorbatesRoute";
import {AdsorbentsRoute} from "./routes/AdsorbentsRoute";
import {PrivateRoute} from "./PrivateRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          authed={0}
          exact
          path={"/adsorbatos"}
          component={AdsorbatesRoute}
        />
        <PrivateRoute
          authed={0}
          exact
          path={"/adsorbentes"}
          component={AdsorbentsRoute}
        />
        <PrivateRoute authed={0} exact path={"/"} component={HomeRoute} />
      </Switch>
    </BrowserRouter>
  );
};
