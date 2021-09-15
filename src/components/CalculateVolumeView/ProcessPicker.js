import {ProcessSearchContainer} from "./ProcessSearch";
import {InnerProcessList} from "../List/ProcessList/InnerProcessList";
import React, {useState} from "react";
import {ProcessPickerContainer} from "./Styles";

export const ProcessPicker = ({setProcess}) => {
  const [processes, setProcesses] = useState(null);

  return (
    <ProcessPickerContainer>
      <ProcessSearchContainer setProcesses={setProcesses} />
      {processes && (
        <InnerProcessList processes={processes} onProcessClick={setProcess} />
      )}
    </ProcessPickerContainer>
  );
};
