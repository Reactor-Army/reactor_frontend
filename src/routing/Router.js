import {Switch} from "react-router-dom";
import React from "react";
import {AdsorbatesRoute} from "./routes/AdsorbatesRoute";
import {AdsorbentsRoute} from "./routes/AdsorbentsRoute";
import {ProcessesRoute} from "./routes/ProcessesRoute";
import {PrivateRoute} from "./PrivateRoute";
import {IdealAdsorbentRoute} from "./routes/IdealAdsorbentRoute";
import {ProcessDetailRoute} from "./routes/ProcessDetailRoute";
import {URLS} from "./urls";
import {AdsorbateDetailRoute} from "./routes/AdsorbateDetailRoute";
import {AdsorbentDetailRoute} from "./routes/AdsorbentDetailRoute";
import {AdsorbateCreateRoute} from "./routes/AdsorbateCreateRoute";
import {AdsorbentCreateRoute} from "./routes/AdsorbentCreateRoute";
import {SystemCreateRoute} from "./routes/SystemCreateRoute";
import {SystemEditRoute} from "./routes/SystemEditRoute";
import {AdsorbateEditRoute} from "./routes/AdsorbateEditRoute";
import {AdsorbentEditRoute} from "./routes/AdsorbentEditRoute";
import {CalculateVolumeRoute} from "./routes/CalculateVolumeRoute";
import {NotFoundRoute} from "./routes/NotFoundRoute/NotFoundRoute";
import {HomeRoute} from "./routes/HomeRoute/HomeRoute";
import {ThomasRoute} from "./routes/ThomasRoute";
import {AdamsBohartRoute} from "./routes/AdamsBohartRoute";
import {YoonNelsonRoute} from "./routes/YoonNelsonRoute";
import {AboutUsRoute} from "./routes/AboutUsRoute/AboutUsRoute";
import {ModelsRoute} from "./routes/ModelsRoute/ModelsRoute";
import {LoginRoute} from "./routes/LoginRoute/LoginRoute";
import {UsersRoute} from "./routes/UsersRoute/UsersRoute";
import {UserCreateRoute} from "./routes/UserCreateRoute";

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
        path={URLS.ADSORBATE_CREATE}
        component={AdsorbateCreateRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ADSORBENT_CREATE}
        component={AdsorbentCreateRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.PROCESS_CREATE}
        component={SystemCreateRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.PROCESS_EDIT}
        component={SystemEditRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ADSORBATE_EDIT}
        component={AdsorbateEditRoute}
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
        path={URLS.ADSORBENT_DETAIL}
        component={AdsorbentDetailRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ADSORBENT_EDIT}
        component={AdsorbentEditRoute}
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
        path={URLS.PROCESS_EFFLUENT_VOLUME}
        component={CalculateVolumeRoute}
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
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ABOUT_US}
        component={AboutUsRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.HOME}
        component={HomeRoute}
        showSideBar={false}
        showTopBar={false}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.THOMAS}
        component={ThomasRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.ADAMS_BOHART}
        component={AdamsBohartRoute}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.YOON_NELSON}
        component={YoonNelsonRoute}
      />
      <PrivateRoute
        authed={0}
        component={ModelsRoute}
        path={URLS.MODEL_SELECTION}
      />
      <PrivateRoute
        authed={0}
        exact
        path={URLS.USER_CREATE}
        component={UserCreateRoute}
      />
      <PrivateRoute authed={0} component={UsersRoute} path={URLS.USERS} />
      <PrivateRoute
        authed={0}
        component={LoginRoute}
        path={URLS.LOGIN}
        showSideBar={false}
        showTopBar={false}
      />
      <PrivateRoute
        authed={0}
        component={NotFoundRoute}
        showSideBar={false}
        showTopBar={false}
      />
    </Switch>
  );
};
