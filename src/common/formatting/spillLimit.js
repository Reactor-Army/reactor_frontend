const NO_LIMIT = "No regulado";
import {UNITS} from "../fields";

export const spillLimit = (limit) => {
  if (!limit) {
    return NO_LIMIT;
  }
  return `${limit} ${UNITS.spillLimit}`;
};
