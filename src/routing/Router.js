import {BrowserRouter, Switch} from "react-router-dom";
import React from "react";
import {HomeRoute} from "./routes/HomeRoute";
import {AdsorbatesRoute} from "./routes/AdsorbatesRoute";
import {AdsorbentsRoute} from "./routes/AdsorbentsRoute";
import {ProcessesRoute} from "./routes/ProcessesRoute";
import {PrivateRoute} from "./PrivateRoute";
import {IdealAdsorbentRoute} from "./routes/IdealAdsorbentRoute";
import {ProcessDetailRoute} from "./routes/ProcessDetailRoute";

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
          path={"/procesos/:id"}
          component={ProcessDetailRoute}
        />
        <PrivateRoute
          authed={0}
          exact
          path={"/adsorbentes"}
          component={AdsorbentsRoute}
        />
        <PrivateRoute
          authed={0}
          exact
          path={"/procesos"}
          component={ProcessesRoute}
        />
        <PrivateRoute
          authed={0}
          exact
          path={"/adsorbente/ideal"}
          component={IdealAdsorbentRoute}
        />
        <PrivateRoute authed={0} exact path={"/"} component={HomeRoute} />
      </Switch>
    </BrowserRouter>
  );
};
