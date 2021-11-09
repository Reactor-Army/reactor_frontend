import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {ProcessPicker} from "../../components/ChartArea/ProcessPicker";

export const ChartAreaRoute = () => {
  const [processId, setProcessId] = useState(null);
  console.log(processId);
  return (
    <>
      <PageTitle title={"Cálculo de área de curvas"} />
      <ProcessPicker setProcessId={setProcessId} />
    </>
  );
};
