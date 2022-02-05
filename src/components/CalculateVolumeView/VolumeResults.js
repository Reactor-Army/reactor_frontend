import React from "react";
import {UNITS} from "../../common/fields";
import {Button, VolumeResultsContainer} from "./Styles";
import {DetailTable, DetailTableRow} from "../DetailTable/DetailTable";

export const VolumeResults = ({volume, onResetClick}) => {
  return (
    <VolumeResultsContainer>
      <DetailTable title="Resultado">
        <DetailTableRow
          label="Volumen del reactor:"
          value={`${volume} ${UNITS.VOLUME}`}
        />
      </DetailTable>
      <Button onClick={onResetClick}>Calcular otro volumen</Button>
    </VolumeResultsContainer>
  );
};
