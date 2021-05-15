import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {Label} from "./Label";

export const ProcessDetail = ({process}) => {
  return (
    <Container>
      <PageTitle title={`Detalle del proceso}`} />
      <Typography>Adsorbato: {process.adsorbato.nombreIon}</Typography>
      <Typography>Adsorbente: {process.adsorbente.nombre}</Typography>
      <Label label={"qMax"} value={process.qmax} />
      <Typography>
        Tiempo de equilibrio: {process.tiempoEquilibrio} minutos
      </Typography>
      <Typography>pH inicial: {process.phinicial}</Typography>
      <Typography>
        Proceso de complejación: {booleanToString(process.complejacion)}
      </Typography>
      <Typography>
        Proceso con intercambio iónico:{" "}
        {booleanToString(process.intercambioIonico)}
      </Typography>
      <Typography>
        Reacción química: {booleanToString(process.reaccionQuimica)}
      </Typography>
      <Typography>Fuente: {process.fuente}</Typography>
      <Typography>Observaciones: {process.observacion}</Typography>
    </Container>
  );
};

const booleanToString = (bool) => {
  return bool ? "Sí" : "No";
};
