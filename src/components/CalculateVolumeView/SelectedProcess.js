import React from "react";
import {Label} from "../Detail/Label";
import {getKineticConstantUnits} from "../../common/UnitsUtils";
import {ProcessList} from "../List/ProcessList/ProcessList";
import {SelectedProcessContainer} from "./Styles";
import {SectionHeader} from "../Detail/SectionHeader";

export const SelectedProcess = ({process}) => {
  return (
    <>
      <SectionHeader>Sistema seleccionado</SectionHeader>

      <SelectedProcessContainer>
        <ProcessList processes={[process]} />
        <div>
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
        </div>
      </SelectedProcessContainer>
    </>
  );
};
