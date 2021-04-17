import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import React from "react";
import {AdsorbatoList} from "./features/adsorbato/AdsorbatoList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/adsorbatos">
            <AdsorbatoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
