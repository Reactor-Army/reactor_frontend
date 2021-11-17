import {useSelector} from "react-redux";
import React from "react";
import {CircularProgress} from "@material-ui/core";
import {PageTitle} from "../../common/PageTitle";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {Plot} from "../../components/ChartArea/Plot";
import {AreaDataFrame} from "../../components/ChartArea/AreaDataFrame";

export const ChartAreaResultsRoute = () => {
  const {loading, results} = useSelector((state) => state.areaResults);
  const history = useHistory();

  if (results === null) {
    // Redirect to chart area root route if user accesses by URL
    history.push(URLS.CHART_AREA);
  }
  return (
    <>
      <PageTitle title={"Resultados"} />
      {loading && <CircularProgress />}
      <AreaDataFrame results={results} />
      <Plot curve={results.curva} baseLine={results.lineaBase} />
    </>
  );
};
