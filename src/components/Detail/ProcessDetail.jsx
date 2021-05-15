import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";

export const ProcessDetail = ({process}) => {
  return (
    <Container>
      <PageTitle title={`Detalle del proceso ID ${process.id}`} />
      <Typography>Adsorbato: ID {process.adsorbato.id}</Typography>
      <Typography>Adsorbente: ID {process.adsorbente.id}</Typography>
      <Typography>qMax: {process.qmax} mmol/g</Typography>
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
