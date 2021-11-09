import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {SectionHeader} from "../../components/Detail/SectionHeader";
import {ProcessSearchContainer} from "../../components/CalculateVolumeView/ProcessSearchContainer";
import {ProcessPickerResults} from "../../components/CalculateVolumeView/ProcessPickerResults";
import {getProcess} from "../../services/processes";
import CircularProgress from "@material-ui/core/CircularProgress";
import {ProcessList} from "../../components/List/ProcessList/ProcessList";

export const ChartAreaRoute = () => {
  const [processes, setProcesses] = useState(null);
  const [process, setProcess] = useState(null);
  const [processId, setProcessId] = useState(null);
  const [loading, setLoading] = useState(false);
  const _setProcesses = (newProcesses) => {
    setProcess(null);
    setProcesses(newProcesses);
  };
  const changeProcess = async (id) => {
    setProcessId(id);
    setProcess(null);
    if (id === null) {
      return;
    }
    setLoading(true);
    const process = await getProcess(id);
    setProcess(process);
    setLoading(false);
  };

  if (loading) {
    console.log(processId);
    return <CircularProgress />;
  }
  return (
    <>
      <PageTitle title={"Cálculo de área de curvas"} />
      <SectionHeader>
        Seleccioná el sistema para el cual querés calcular el área
      </SectionHeader>
      <ProcessSearchContainer setProcesses={_setProcesses} />
      {process === null && (
        <ProcessPickerResults
          processes={processes}
          setProcess={changeProcess}
        />
      )}
      {processId && <ProcessList processes={[process]} />}
    </>
  );
};
