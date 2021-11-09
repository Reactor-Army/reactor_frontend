import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {ProcessPicker} from "../../components/ChartArea/ProcessPicker";
import {ChartPicker} from "../../components/ChartArea/ChartPicker";

export const ChartAreaRoute = () => {
  const [processId, setProcessId] = useState(null);

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <PageTitle title={"Cálculo de área de curvas"} />
      <ProcessPicker setProcessId={setProcessId} />
      {processId && <ChartPicker processId={processId} onSubmit={onSubmit} />}
    </>
  );
};
