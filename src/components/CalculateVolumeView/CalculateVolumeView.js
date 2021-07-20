import {PageTitle} from "../../common/PageTitle";
import React from "react";
import {Typography} from "@material-ui/core";
import {CalculateVolumeForm} from "./CalculateVolumeForm";

export const CalculateVolumeView = () => {
  return (
    <>
      <PageTitle title={"Calcular Volumen Efectivo"} />
      <Typography>
        En esta página podes calcular el volumen efectivo que necesita cubrir el
        reactor a construir que use este sistema, en base a concentración de
        entrada del adsorbato, concentración de salida deseado, y caudal del
        medio.
      </Typography>
      <CalculateVolumeForm />
    </>
  );
};
