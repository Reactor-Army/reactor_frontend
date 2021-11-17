import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {CircularProgress} from "@material-ui/core";
import {PageTitle} from "../../common/PageTitle";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {Plot} from "../../components/ChartArea/Plot";
import {AreaDataFrame} from "../../components/ChartArea/AreaDataFrame";
import {SystemTitle} from "../../components/ChartArea/SystemTitle";
import {Button} from "../../components/Button/Button";
import {setNull} from "../../redux/areaResults";

export const ChartAreaResultsRoute = () => {
  const {loading, results} = useSelector((state) => state.areaResults);
  const history = useHistory();
  const dispatch = useDispatch();
  const goBack = () => {
    dispatch(setNull());
    history.push(URLS.CHART_AREA);
  };
  if (results === null) {
    // Redirect to chart area root route if user accesses by URL
    history.push(URLS.CHART_AREA);
  }

  return (
    <>
      <PageTitle title={"Resultados"} />
      {loading && <CircularProgress />}
      <SystemTitle response={results} />
      <AreaDataFrame results={results} />
      <Plot curve={results.curva} baseLine={results.lineaBase} />
      <Button size="medium" text="Volver" onClick={goBack} />
    </>
  );
};
