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
import {UNITS} from "../../common/fields";
import {getKineticConstantUnits} from "../../common/UnitsUtils";

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
      <Label
        label={PROCESS_FIELDS.QMAX}
        value={`${process.qmax} ${UNITS.QMAX}`}
      />
      <Label
        label={PROCESS_FIELDS.EQUILIBRIUM_TIME}
        value={`${process.tiempoEquilibrio} ${UNITS.EQUILIBRIUM_TIME}`}
      />
      <Label
        label={PROCESS_FIELDS.TEMPERATURE}
        value={`${process.temperatura} ${UNITS.TEMPERATURE}`}
      />
      <Label label={PROCESS_FIELDS.INITIAL_PH} value={process.phinicial} />
      <Label
        label={PROCESS_FIELDS.KINETIC_CONSTANT}
        value={`${
          process.constanteCinetica ? process.constanteCinetica : "-"
        } ${getKineticConstantUnits(process.ordenReaccion)}`}
      />
      <Label
        label={PROCESS_FIELDS.REACTION_ORDER}
        value={process.ordenReaccion}
      />
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
