import {useSelector} from "react-redux";
import React from "react";
import {CircularProgress} from "@material-ui/core";
import {PageTitle} from "../../common/PageTitle";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";

export const ChartAreaResultsRoute = () => {
  const {loading, results} = useSelector((state) => state.areaResults);
  const history = useHistory();

  if (results === null) {
    history.push(URLS.CHART_AREA);
  }
  return (
    <>
      <PageTitle title={"Resultados"} />
      {loading && <CircularProgress />}
      {results && <p>{results.reactorQ}</p>}
    </>
  );
};
