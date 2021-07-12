import React from "react";
import Container from "@material-ui/core/Container";
import {Label} from "./Label";
import {SectionHeader} from "./SectionHeader";
import {Cards} from "./Cards";
import {PROCESS_FIELDS} from "../../common/fields";
import {DetailHeader} from "./DetailHeader";
import {DeleteButton} from "../List/common/DeleteButton";
import {processEditUrlFor} from "../../routing/urls";
import {EditButton} from "../List/common/EditButton";

export const ProcessDetail = ({process, onDeleteClick}) => {
  return (
    <Container>
      <DetailHeader
        title={"Sistema"}
        id={process.id}
        buttons={
          <>
            <EditButton url={processEditUrlFor(process.id)} />
            <DeleteButton onClick={onDeleteClick} />
          </>
        }
      />
      <Cards adsorbent={process.adsorbente} adsorbate={process.adsorbato} />
      <SectionHeader>Características</SectionHeader>
      <Label label={PROCESS_FIELDS.QMAX} value={`${process.qmax} mmol/g`} />
      <Label
        label={PROCESS_FIELDS.EQUILIBRIUM_TIME}
        value={`${process.tiempoEquilibrio} minutos`}
      />
      <Label
        label={PROCESS_FIELDS.TEMPERATURE}
        value={`${process.temperatura} °C`}
      />
      <Label label={PROCESS_FIELDS.INITIAL_PH} value={process.phinicial} />
      <SectionHeader>Mecanismos</SectionHeader>
      <Label
        label={PROCESS_FIELDS.COMPLEXATION}
        value={booleanToString(process.complejacion)}
      />
      <Label
        label={PROCESS_FIELDS.IONIC_INTERCHANGE}
        value={booleanToString(process.intercambioIonico)}
      />
      <Label
        label={PROCESS_FIELDS.CHEMICAL_REACTION}
        value={booleanToString(process.reaccionQuimica)}
      />
      <SectionHeader>Adicional</SectionHeader>
      <Label label={PROCESS_FIELDS.SOURCE} value={process.fuente} />
      <Label label={PROCESS_FIELDS.NOTES} value={process.observacion} />
    </Container>
  );
};

const booleanToString = (bool) => {
  return bool ? "Sí" : "No";
};
