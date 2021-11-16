import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {ProcessPicker} from "../../components/ChartArea/ProcessPicker";
import {ChartPicker} from "../../components/ChartArea/ChartPicker";
import {calculateReactorQ} from "../../services/models";

export const ChartAreaRoute = () => {
  const [processId, setProcessId] = useState(null);

  const onSubmit = async (values) => {
    const response = await calculateReactorQ(
      values.idCurva,
      values.idLineaBase,
    );
    console.log(response);
  };
  return (
    <>
      <PageTitle title={"Cálculo de área de curvas"} />
      <ProcessPicker setProcessId={setProcessId} />
      {processId && <ChartPicker processId={processId} onSubmit={onSubmit} />}
    </>
  );
};
