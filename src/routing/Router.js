import {Switch} from "react-router-dom";
import React from "react";
import {HomeRoute} from "./routes/HomeRoute";
import {AdsorbatesRoute} from "./routes/AdsorbatesRoute";
import {AdsorbentsRoute} from "./routes/AdsorbentsRoute";
import {ProcessesRoute} from "./routes/ProcessesRoute";
import {PrivateRoute} from "./PrivateRoute";
import {IdealAdsorbentRoute} from "./routes/IdealAdsorbentRoute";
import {ProcessDetailRoute} from "./routes/ProcessDetailRoute";
import {URLS} from "./urls";
import {AdsorbateDetailRoute} from "./routes/AdsorbateDetailRoute";

export const Router = () => {
  return (
    <Switch>
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ADSORBATES_LIST}
        component={AdsorbatesRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ADSORBATE_DETAIL}
        component={AdsorbateDetailRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ADSORBENTS_LIST}
        component={AdsorbentsRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.PROCESSES_LIST}
        component={ProcessesRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.PROCESS_DETAIL}
        component={ProcessDetailRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.BEST_ADSORBENT}
        component={IdealAdsorbentRoute}
      />
      <PrivateRoute authed={0} exact path={URLS.HOME} component={HomeRoute} />
    </Switch>
  );
};
