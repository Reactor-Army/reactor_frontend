import {PageTitle} from "../../common/PageTitle";
import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import {CalculateVolumeForm} from "./CalculateVolumeForm";
import {InvalidFormMessage, VolumeFormContainer} from "./Styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {SelectedProcess} from "./SelectedProcess";
import {SectionHeader} from "../Detail/SectionHeader";
import {ProcessPickerResults} from "./ProcessPickerResults";
import {ProcessSearchContainer} from "./ProcessSearchContainer";

export const CalculateVolumeView = ({
  process,
  onSubmit,
  setProcess,
  loading,
}) => {
  const [processes, setProcesses] = useState(null);

  const _setProcesses = (processes) => {
    setProcess(null);
    setProcesses(processes);
  };
  const invalidForm =
    process && (!process.ordenReaccion || !process.constanteCinetica);
  return (
    <>
      <PageTitle title={"Calcular Volumen Efluente"} />
      <Typography>
        En esta página podes calcular el volumen del efluente que necesita
        cubrir el reactor a construir que use este sistema, en base a
        concentración de entrada del adsorbato, concentración de salida deseado,
        y caudal del medio.
      </Typography>
      <SectionHeader>
        Seleccioná el sistema para el cual querés calcular el volumen
      </SectionHeader>
      <ProcessSearchContainer setProcesses={_setProcesses} />
      {process === null && (
        <ProcessPickerResults processes={processes} setProcess={setProcess} />
      )}
      {loading && <CircularProgress />}
      {process &&
        (invalidForm ? (
          <InvalidFormMessage>
            *No se puede calcular el volumen del efluente para este sistema dado
            que no tiene asignada una constante cinética y un orden de reacción.
            Probá buscar otra combinación.
          </InvalidFormMessage>
        ) : (
          <VolumeFormContainer>
            <CalculateVolumeForm onSubmit={onSubmit} />
            <SelectedProcess process={process} />
          </VolumeFormContainer>
        ))}
    </>
  );
};
