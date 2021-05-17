import {Route, Redirect} from "react-router-dom";
import React from "react";
import {PageContainer} from "../components/PageContainer/PageContainer";
import {PageContent} from "../components/PageContent/PageContent";

export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return authed === 0 ? (
    <Route
      {...rest}
      render={(props) => (
        <PageContainer>
          <PageContent>
            <Component {...props} />
          </PageContent>
        </PageContainer>
      )}
    />
  ) : (
    <Redirect to={{pathname: "/login"}} />
  );
};
