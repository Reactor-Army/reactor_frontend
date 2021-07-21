import {UNITS} from "./fields";

export const getKineticConstantUnits = (reactionOrder) => {
  const unitValues = {
    1: UNITS.KINETIC_CONSTANT_FIRST_ORDER,
    2: UNITS.KINETIC_CONSTANT_FIRST_ORDER,
  };

  return unitValues[reactionOrder];
};
