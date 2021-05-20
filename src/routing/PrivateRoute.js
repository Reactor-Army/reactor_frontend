import {Route, Redirect} from "react-router-dom";
import React from "react";

export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return authed === 0 ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to={{pathname: "/login"}} />
  );
};
