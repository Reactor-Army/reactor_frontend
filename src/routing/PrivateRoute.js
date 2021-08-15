import {Route, Redirect} from "react-router-dom";
import React from "react";
import {CommonPage} from "../components/CommonPage/CommonPage";

export const PrivateRoute = ({
  component: Component,
  authed,
  showSideBar = true,
  showTopBar = true,
  ...rest
}) => {
  return authed === 0 ? (
    <Route
      {...rest}
      render={(props) => (
        <CommonPage showSideBar={showSideBar} showTopBar={showTopBar}>
          <Component {...props} />
        </CommonPage>
      )}
    />
  ) : (
    <Redirect to={{pathname: "/login"}} />
  );
};
