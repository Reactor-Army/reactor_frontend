import {ProcessSearchContainer} from "./ProcessSearch";
import {InnerProcessList} from "../List/ProcessList/InnerProcessList";
import React, {useState} from "react";
import {InvalidFormMessage, ProcessPickerContainer} from "./Styles";

export const ProcessPicker = ({setProcess}) => {
  const [processes, setProcesses] = useState(null);

  const _setProcesses = (processes) => {
    setProcesses(processes);
    setProcess(null);
  };

  return (
    <ProcessPickerContainer>
      <ProcessSearchContainer setProcesses={_setProcesses} />
      {processes !== null && (
        <InnerProcessList processes={processes} onProcessClick={setProcess} />
      )}
      {processes && processes.length === 0 && (
        <InvalidFormMessage>
          *No se encontraron sistemas para esta combinación de adsorbato y
          adsorbente.
        </InvalidFormMessage>
      )}
    </ProcessPickerContainer>
  );
};
