import {Route, Redirect} from "react-router-dom";
import React from "react";
import {CommonPage} from "../components/CommonPage/CommonPage";
import {URLS} from "./urls";
import {userHasRole} from "../utils/userHasRole";
import {settings} from "../config/settings";
import {useSelector} from "react-redux";

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

  const allowPageAccess = () => {
    if (adminProtected) {
      return loggedIn && userHasRole(userData, settings.ADMIN_ROLE);
    }
    if (userProtected) {
      return loggedIn;
    }

    return true;
  };

  return authed === 0 ? (
    <Route
      {...rest}
      render={(props) => (
        <CommonPage showSideBar={showSideBar} showTopBar={showTopBar}>
          {!allowPageAccess() ? (
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
