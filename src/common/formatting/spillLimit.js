const NO_LIMIT = "Sin datos";
import {UNITS} from "../fields";

export const spillLimit = (limit) => {
  if (!limit) {
    return NO_LIMIT;
  }
  return `${limit} ${UNITS.SPILL_LIMIT}`;
};
