import React from "react";
import {Label} from "../Detail/Label";
import {getKineticConstantUnits} from "../../common/UnitsUtils";
import {ProcessList} from "../List/ProcessList/ProcessList";
import {SelectedProcessContainer} from "./Styles";
import {SectionHeader} from "../Detail/SectionHeader";
import {
  DataFrame,
  DataFrameContent,
  Title,
} from "../ChemicalModels/Models/ModelsStyles";

export const SelectedProcess = ({process}) => {
  return (
    <div style={{display: "flex"}}>
      <SectionHeader>Sistema seleccionado</SectionHeader>

      <SelectedProcessContainer>
        <ProcessList processes={[process]} />
        <DataFrame>
          <DataFrameContent>
            <Title>Datos relevantes</Title>
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
    </div>
  );
};
