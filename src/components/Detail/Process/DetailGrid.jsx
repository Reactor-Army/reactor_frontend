import {DetailTableGrid} from "../Styles";
import {DetailTable, DetailTableRow} from "../../DetailTable/DetailTable";
import {DetailsTooltip} from "../DetailsTooltip";
import {PROCESS_FIELDS, UNITS} from "../../../common/fields";
import {getKineticConstantUnits} from "../../../common/UnitsUtils";
import React from "react";

const booleanToString = (bool) => {
  return bool ? "Sí" : "No";
};

export const DetailGrid = ({process}) => {
  return (
    <DetailTableGrid cols={3}>
      <DetailTable title="Características" icon={<DetailsTooltip />}>
        <DetailTableRow
          label={PROCESS_FIELDS.QMAX}
          value={process.qmax}
          units={UNITS.QMAX}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.EQUILIBRIUM_TIME}
          value={process.tiempoEquilibrio}
          units={UNITS.EQUILIBRIUM_TIME}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.TEMPERATURE}
          value={process.temperatura}
          units={UNITS.TEMPERATURE}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.INITIAL_PH}
          value={process.phinicial}
        />
        <DetailTableRow
          label={PROCESS_FIELDS.KINETIC_CONSTANT}
          value={process.constanteCinetica}
          units={
            process.constanteCinetica &&
            getKineticConstantUnits(process.ordenReaccion)
          }
        />
        <DetailTableRow
          label={PROCESS_FIELDS.REACTION_ORDER}
          value={process.ordenReaccion}
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
        <DetailTableRow label={PROCESS_FIELDS.SOURCE} value={process.fuente} />
        <DetailTableRow
          label={PROCESS_FIELDS.NOTES}
          value={process.observacion}
        />
      </DetailTable>
    </DetailTableGrid>
  );
};
