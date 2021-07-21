import {PageTitle} from "../../common/PageTitle";
import React from "react";
import {Typography} from "@material-ui/core";
import {CalculateVolumeForm} from "./CalculateVolumeForm";
import {Label} from "../Detail/Label";
import {SectionHeader} from "../Detail/SectionHeader";

export const CalculateVolumeView = ({reactionOrder, constanteCinetica}) => {
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
      <Label label={"Constante cinética (K)"} value={constanteCinetica} />
      <Label label={"Orden de la reacción (n)"} value={reactionOrder} />
      <CalculateVolumeForm />
    </>
  );
};
