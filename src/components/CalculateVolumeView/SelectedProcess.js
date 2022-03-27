import React from "react";
import {getKineticConstantUnits} from "../../common/UnitsUtils";
import {SelectedProcessContainer} from "./Styles";
import {DetailTable, DetailTableRow} from "../DetailTable/DetailTable";
import {PROCESS_FIELDS} from "../../common/fields";
import {UNITS} from "../../common/fields";

export const SelectedProcess = ({process}) => {
  return (
    <SelectedProcessContainer>
      <DetailTable title="Sistema Seleccionado">
        <DetailTableRow
          label={PROCESS_FIELDS.ADSORBATE}
          value={process.adsorbato.nombreIUPAC}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.ADSORBENT}
          value={`${process.adsorbente.nombre} (${
            process.adsorbente.particulaT
          }) ${process.adsorbente.particulaT && UNITS.PARTICLE_SIZE}`}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.EQUILIBRIUM_TIME}
          value={`${process.tiempoEquilibrio} ${UNITS.EQUILIBRIUM_TIME}`}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.QMAX}
          value={`${process.qmax} ${UNITS.QMAX}`}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.TEMPERATURE}
          value={`${process.temperatura} ${UNITS.TEMPERATURE}`}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.INITIAL_PH}
          value={process.phinicial}
        />
        <DetailTableRow
          label={`${PROCESS_FIELDS.KINETIC_CONSTANT} (k)`}
          value={`${process.constanteCinetica} ${getKineticConstantUnits(
            process.ordenReaccion,
          )}`}
        />
        <DetailTableRow
          label={`${PROCESS_FIELDS.REACTION_ORDER} (n)`}
          value={process.ordenReaccion}
        />
      </DetailTable>
    </SelectedProcessContainer>
  );
};
