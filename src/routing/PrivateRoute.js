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
          <div
            style={{
              background: "green",
              width: "100%",
              height: "100vh",
              display: "flex",
              marginLeft: "230px",
            }}>
            <Component {...props} />
          </div>
        </PageContainer>
      )}
    />
  ) : (
    <Redirect to={{pathname: "/login"}} />
  );
};
