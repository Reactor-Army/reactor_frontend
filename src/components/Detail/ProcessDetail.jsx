import React from "react";
import Container from "@material-ui/core/Container";
import {Cards} from "./Cards";
import {PROCESS_FIELDS} from "../../common/fields";
import {DetailHeader} from "./DetailHeader";
import {DeleteButton} from "../List/common/DeleteButton";
import {processEditUrlFor} from "../../routing/urls";
import {EditButton} from "../List/common/EditButton";
import {UNITS} from "../../common/fields";
import {getKineticConstantUnits} from "../../common/UnitsUtils";
import {EffectiveVolumeButton} from "./EffectiveVolumeButton";
import {DetailTable, DetailTableRow} from "../DetailTable/DetailTable";
import {DetailTableContainer} from "./Styles";

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

      <DetailTableContainer rows={3}>
        <DetailTable title="Características">
          <DetailTableRow
            label={PROCESS_FIELDS.QMAX}
            value={process.qmax ? `${process.qmax} ${UNITS.QMAX}` : "-"}
          />
          <DetailTableRow
            label={PROCESS_FIELDS.EQUILIBRIUM_TIME}
            value={
              process.tiempoEquilibrio
                ? `${process.tiempoEquilibrio} ${UNITS.EQUILIBRIUM_TIME}`
                : "-"
            }
          />
          <DetailTableRow
            label={PROCESS_FIELDS.TEMPERATURE}
            value={
              process.temperatura
                ? `${process.temperatura} ${UNITS.TEMPERATURE}`
                : "-"
            }
          />
          <DetailTableRow
            label={PROCESS_FIELDS.INITIAL_PH}
            value={process.phinicial ? process.phinicial : "-"}
          />
          <DetailTableRow
            label={PROCESS_FIELDS.KINETIC_CONSTANT}
            value={
              process.constanteCinetica
                ? `${process.constanteCinetica} ${getKineticConstantUnits(
                    process.ordenReaccion,
                  )}`
                : "-"
            }
          />
          <DetailTableRow
            label={PROCESS_FIELDS.REACTION_ORDER}
            value={process.ordenReaccion ? process.ordenReaccion : "-"}
          />
        </DetailTable>

        <DetailTable title="Mecanismos">
          <DetailTableRow
            label={PROCESS_FIELDS.COMPLEXATION}
            value={booleanToString(process.complejacion)}
          />
          <DetailTableRow
            label={PROCESS_FIELDS.IONIC_INTERCHANGE}
            value={booleanToString(process.intercambioIonico)}
          />
          <DetailTableRow
            label={PROCESS_FIELDS.CHEMICAL_REACTION}
            value={booleanToString(process.reaccionQuimica)}
          />
        </DetailTable>

        <DetailTable title="Información Adicional">
          <DetailTableRow
            label={PROCESS_FIELDS.SOURCE}
            value={process.fuente ? process.fuente : "-"}
          />
          <DetailTableRow
            label={PROCESS_FIELDS.NOTES}
            value={process.observacion ? process.observacion : "-"}
          />
        </DetailTable>
      </DetailTableContainer>
      <EffectiveVolumeButton processId={process.id} />
    </Container>
  );
};

const booleanToString = (bool) => {
  return bool ? "Sí" : "No";
};
