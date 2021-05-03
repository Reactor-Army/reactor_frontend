import {Route, Redirect} from "react-router-dom";
import React from "react";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {PageContainer} from "../components/PageContainer/PageContainer";

export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return authed === 0 ? (
    <Route
      {...rest}
      render={(props) => (
        <PageContainer>
          <Sidebar />
          <Component {...props} />
        </PageContainer>
      )}
    />
  ) : (
    <Redirect to={{pathname: "/login"}} />
  );
};
