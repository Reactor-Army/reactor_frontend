import React from "react";
import {Cards} from "./Cards";
import {PROCESS_FIELDS} from "../../common/fields";
import {DetailHeader} from "./DetailHeader";
import {DeleteButton} from "../List/common/DeleteButton";
import {processEditUrlFor} from "../../routing/urls";
import {EditButton} from "../List/common/EditButton";
import {UNITS} from "../../common/fields";
import {getKineticConstantUnits} from "../../common/UnitsUtils";
import {DetailTable, DetailTableRow} from "../DetailTable/DetailTable";
import {DetailTableGrid, Container} from "./Styles";
import {Icon} from "../../common/styles";
import info_icon from "../../resources/images/info_icon.png";
import Tooltip from "@material-ui/core/Tooltip";

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

      <DetailTableGrid cols={3}>
        <DetailTable
          title="Características"
          icon={
            <Tooltip title={"Parámetros obtenidos con ensayos discontinuos"}>
              <Icon
                src={info_icon}
                alt={"Información"}
                onClick={() => console.log("Hola")}
              />
            </Tooltip>
          }>
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
          <DetailTableRow
            label={PROCESS_FIELDS.SOURCE}
            value={process.fuente}
          />
          <DetailTableRow
            label={PROCESS_FIELDS.NOTES}
            value={process.observacion}
          />
        </DetailTable>
      </DetailTableGrid>
    </Container>
  );
};

const booleanToString = (bool) => {
  return bool ? "Sí" : "No";
};
