import {Route, Redirect} from "react-router-dom";
import React, {useEffect} from "react";
import {CommonPage} from "../components/CommonPage/CommonPage";
import {useSelector} from "react-redux";
import {URLS} from "./urls";
import {userHasRole} from "../utils/userHasRole";
import {settings} from "../config/settings";
import {useDispatch} from "react-redux";
import {errorCodes} from "../utils/errorStatusCodes";
import {logout} from "../redux/auth";
import {displayUpdateMessage} from "../utils/displayUpdateMessage";

export const PrivateRoute = ({
  component: Component,
  authed,
  showSideBar = true,
  showTopBar = true,
  adminProtected = false,
  userProtected = false,
  ...rest
}) => {
  const dispatch = useDispatch();
  const {loggedIn, userData} = useSelector((state) => state.auth);
  const {users} = useSelector((state) => state.users);
  const user = useSelector((store) => store.user.user);
  const dependencies = [users, user];

  useEffect(() => {
    dependencies.some((dependency) => {
      if (dependency && errorCodes.includes(dependency.status)) {
        dispatch(logout());
        displayUpdateMessage();
      }
    });
  }, dependencies);

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
