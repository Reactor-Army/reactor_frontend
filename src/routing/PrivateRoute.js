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
<<<<<<< HEAD
  const allowPageAccess = () => {
    if (adminProtected) {
      return loggedIn && userHasRole(userData, settings.ADMIN_ROLE);
    }
    if (userProtected) {
      return loggedIn;
    }

    return true;
  };
=======
>>>>>>> 79271f5e3269812dc976ac6a182b7efc11aa5368

  return authed === 0 ? (
    <Route
      {...rest}
      render={(props) => (
        <CommonPage showSideBar={showSideBar} showTopBar={showTopBar}>
<<<<<<< HEAD
          {!allowPageAccess() ? (
=======
          {(adminProtected &&
            (!loggedIn || !userHasRole(userData, settings.ADMIN_ROLE))) ||
          (userProtected && !loggedIn) ? (
>>>>>>> 79271f5e3269812dc976ac6a182b7efc11aa5368
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
