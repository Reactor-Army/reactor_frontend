import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {Home} from "./routes/Home";
import {Adsorbate} from "./routes/Adsorbate";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/adsorbates"} component={Adsorbate} />
        <Route path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
