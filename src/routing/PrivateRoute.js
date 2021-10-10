import {Route, Redirect} from "react-router-dom";
import React from "react";
import {CommonPage} from "../components/CommonPage/CommonPage";
import {useSelector} from "react-redux";
import {URLS} from "./urls";
import {userHasRole} from "../utils/userHasRole";
import {settings} from "../config/settings";

export const PrivateRoute = ({
  component: Component,
  authed,
  showSideBar = true,
  showTopBar = true,
  adminProtected = false,
  userProtected = false,
  ...rest
}) => {
  const {loggedIn, userData} = useSelector((state) => state.auth);

  return authed === 0 ? (
    <Route
      {...rest}
      render={(props) => (
        <CommonPage showSideBar={showSideBar} showTopBar={showTopBar}>
          {(adminProtected &&
            (!loggedIn || !userHasRole(userData, settings.ADMIN_ROLE))) ||
          (userProtected && !loggedIn) ? (
            <Redirect to={URLS.NOT_FOUND} />
          ) : (
            <Component {...props} />
          )}
        </CommonPage>
      )}
    />
  ) : (
    <Redirect to={{pathname: "/login"}} />
  );
};
