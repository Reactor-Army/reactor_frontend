import {PageTitle} from "../../common/PageTitle";
import React from "react";
import {Typography} from "@material-ui/core";
import {CalculateVolumeForm} from "./CalculateVolumeForm";
import {SectionHeader} from "../Detail/SectionHeader";
import {InvalidFormMessage} from "./Styles";
import {ProcessPicker} from "./ProcessPicker";
import {Label} from "../Detail/Label";
import {getKineticConstantUnits} from "../../common/UnitsUtils";

export const CalculateVolumeView = ({process, onSubmit, setProcess}) => {
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
      <ProcessPicker setProcess={setProcess} />
      {process &&
        (invalidForm ? (
          <InvalidFormMessage>
            *No se puede calcular el volumen del efluente para este sistema dado
            que no tiene asignada una constante cinética y un orden de reacción.
          </InvalidFormMessage>
        ) : (
          <>
            <Label
              label={"Constante cinética (K)"}
              value={
                process.constanteCinetica
                  ? `${process.constanteCinetica} ${getKineticConstantUnits(
                      process.ordenReaccion,
                    )}`
                  : "-"
              }
            />
            <Label
              label={"Orden de la reacción (n)"}
              value={process.ordenReaccion ? process.ordenReaccion : "-"}
            />
            <CalculateVolumeForm onSubmit={onSubmit} />
          </>
        ))}
    </>
  );
};
