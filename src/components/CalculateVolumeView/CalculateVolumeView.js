import {PageTitle} from "../../common/PageTitle";
import React from "react";
import {Typography} from "@material-ui/core";
import {CalculateVolumeForm} from "./CalculateVolumeForm";
import {Label} from "../Detail/Label";
import {SectionHeader} from "../Detail/SectionHeader";
import {ProcessCardWrapper} from "../Card/ProcessCard/ProcessCardWrapper";
import {CardContainer} from "./Styles";
import {getKineticConstantUnits} from "../../common/UnitsUtils";

export const CalculateVolumeView = ({process, onSubmit}) => {
  return (
    <>
      <PageTitle title={"Calcular Volumen Efectivo"} />
      <Typography>
        En esta página podes calcular el volumen efectivo que necesita cubrir el
        reactor a construir que use este sistema, en base a concentración de
        entrada del adsorbato, concentración de salida deseado, y caudal del
        medio.
      </Typography>
      <SectionHeader>Datos relevantes del sistema</SectionHeader>
      <CardContainer>
        <ProcessCardWrapper process={process} />
      </CardContainer>
      <Label
        label={"Constante cinética (K)"}
        value={`${process.constanteCinetica} ${getKineticConstantUnits(
          process.ordenReaccion,
        )}`}
      />
      <Label label={"Orden de la reacción (n)"} value={process.ordenReaccion} />
      <CalculateVolumeForm onSubmit={onSubmit} />
    </>
  );
};
