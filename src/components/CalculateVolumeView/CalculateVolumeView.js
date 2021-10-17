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
import {FormContainer, Title} from "../ChemicalModels/Models/ModelsStyles";
import {VolumeResults} from "./VolumeResults";

export const CalculateVolumeView = ({
  process,
  onSubmit,
  setProcess,
  loading,
  volumeResult,
  onResetClick,
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
      <PageTitle title={"Cálculo del volumen del reactor"} />
      <Typography>
        En esta página podés calcular el volumen efectivo que necesita tener el
        reactor a construir para el sistema propuesto, en base a la
        concentración de entrada del asdorbato (concentración en el efluente),
        la concentración de salida deseada y el caudal medio.
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
            <FormContainer height={"500px"}>
              {volumeResult === null ? (
                <>
                  <Title>Datos del efluente</Title>
                  <CalculateVolumeForm onSubmit={onSubmit} />
                </>
              ) : (
                <VolumeResults
                  volume={volumeResult}
                  onResetClick={onResetClick}
                />
              )}
            </FormContainer>

            <SelectedProcess process={process} />
          </VolumeFormContainer>
        ))}
    </>
  );
};
