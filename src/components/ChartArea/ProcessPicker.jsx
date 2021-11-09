import React, {useState} from "react";
import {getProcess} from "../../services/processes";
import CircularProgress from "@material-ui/core/CircularProgress";
import {SectionHeader} from "../Detail/SectionHeader";
import {ProcessSearchContainer} from "../../containers/List/Search/ProcessSearchContainer";
import {ProcessPickerResults} from "../CalculateVolumeView/ProcessPickerResults";
import {ProcessList} from "../List/ProcessList/ProcessList";

export const ProcessPicker = () => {
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
  }
  return (
    <>
      <SectionHeader>
        Seleccioná el sistema para el cual querés calcular el área
      </SectionHeader>
      <ProcessSearchContainer setProcesses={_setProcesses} />
      {loading && <CircularProgress />}

      {!loading && process === null && (
        <ProcessPickerResults
          processes={processes}
          setProcess={changeProcess}
        />
      )}
      {process && <ProcessList processes={[process]} />}
    </>
  );
};
