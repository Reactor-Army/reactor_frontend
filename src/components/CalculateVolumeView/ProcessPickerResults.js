import {InnerProcessList} from "../List/ProcessList/InnerProcessList";
import {
  InvalidFormMessage,
  ProcessPickerContainer,
  SectionHeader,
} from "./Styles";
import React from "react";

export const ProcessPickerResults = ({processes, setProcess}) => {
  return (
    <>
      {processes && <SectionHeader>Resultados de la búsqueda</SectionHeader>}
      <ProcessPickerContainer>
        {processes && processes.length > 0 && (
          <InnerProcessList processes={processes} onProcessClick={setProcess} />
        )}
        {processes && processes.length === 0 && (
          <InvalidFormMessage>
            *No se encontraron sistemas para este adsorbato y adsorbente. Probá
            buscar otra combinación.
          </InvalidFormMessage>
        )}
      </ProcessPickerContainer>
    </>
  );
};
