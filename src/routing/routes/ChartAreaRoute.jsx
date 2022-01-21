import React, {useEffect, useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {ProcessPicker} from "../../components/ChartArea/ProcessPicker";
import {ChartPicker} from "../../components/ChartArea/ChartPicker";
import {calculateArea} from "../../redux/areaResults";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";

export const ChartAreaRoute = () => {
  const [processId, setProcessId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const results = useSelector((state) => state.areaResults);
  useEffect(() => {
    if (results.results !== null) {
      history.push(URLS.CHART_AREA_RESULTS);
    }
  }, [results]);
  const onSubmit = async (values) => {
    dispatch(calculateArea(values));
  };
  return (
    <>
      <PageTitle title={"Cálculo de área de curvas"} />
      <ProcessPicker setProcessId={setProcessId} />
      {processId && <ChartPicker processId={processId} onSubmit={onSubmit} />}
    </>
  );
};
