import React from "react";
import {PageTitle} from "../../common/PageTitle";
import Container from "@material-ui/core/Container";
import {Label} from "./Label";
import {SectionHeader} from "./SectionHeader";
import {Cards} from "./Cards";

export const ProcessDetail = ({process}) => {
  return (
    <Container>
      <PageTitle title={`Proceso`} />
      <Cards adsorbent={process.adsorbente} adsorbate={process.adsorbato} />
      <SectionHeader>Propiedades</SectionHeader>
      <Label label={"qMax"} value={`${process.qmax} g/mmol`} />
      <Label
        label={"Tiempo de equilibrio"}
        value={`${process.tiempoEquilibrio} minutos`}
      />
      <Label label={"pH inicial"} value={process.phinicial} />
      <SectionHeader>Detalles del proceso</SectionHeader>
      <Label
        label={"Es un proceso de complejación"}
        value={booleanToString(process.complejacion)}
      />
      <Label
        label={"Es un proceso con intercambio iónico"}
        value={booleanToString(process.intercambioIonico)}
      />
      <Label
        label={"Es una reacción química"}
        value={booleanToString(process.reaccionQuimica)}
      />

      <SectionHeader>Adicional</SectionHeader>
      <Label label={"Fuente"} value={process.fuente} />
      <Label label={"Observaciones"} value={process.observacion || "-"} />
    </Container>
  );
};

const booleanToString = (bool) => {
  return bool ? "Sí" : "No";
};
