import React from "react";
import {Label} from "../Detail/Label";
import {getKineticConstantUnits} from "../../common/UnitsUtils";
import {ProcessList} from "../List/ProcessList/ProcessList";
import {SelectedProcessContainer, SelectedProcessTitle} from "./Styles";
import {
  DataFrame,
  DataFrameContent,
  Title,
} from "../ChemicalModels/Models/ModelsStyles";

export const SelectedProcess = ({process}) => {
  return (
    <SelectedProcessContainer>
      <Title>Sistema seleccionado</Title>
      <ProcessList processes={[process]} />
      <DataFrame>
        <DataFrameContent>
          <SelectedProcessTitle>Datos relevantes</SelectedProcessTitle>
          <Label
            label={"Constante cinética (K)"}
            value={
              process.constanteCinetica
                ? `${process.constanteCinetica} ${getKineticConstantUnits(
                    process.ordenReaccion,
                  )}`
                : "-"
            }
          />
          <Label
            label={"Orden de la reacción (n)"}
            value={process.ordenReaccion ? process.ordenReaccion : "-"}
          />
        </DataFrameContent>
      </DataFrame>
    </SelectedProcessContainer>
  );
};
