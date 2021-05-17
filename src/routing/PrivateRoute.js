import {Route, Redirect} from "react-router-dom";
import React from "react";
import Container from "@material-ui/core/Container";

export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return authed === 0 ? (
    <Route
      {...rest}
      render={(props) => (
        <Container>
          <Component {...props} />
        </Container>
      )}
    />
  ) : (
    <Redirect to={{pathname: "/login"}} />
  );
};
