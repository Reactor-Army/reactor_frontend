import {MODEL_ALIAS} from "../../../../common/constants";
import {THOMAS_REQUEST_FIELDS} from "../../../../common/fields";

export const parameters = (curveData) => {
  const parametersByModelType = {
    [MODEL_ALIAS.THOMAS]: thomasParameters,
    [MODEL_ALIAS.YOON_NELSON]: () => {},
    [MODEL_ALIAS.ADAMS_BOHART]: () => {},
  };
  const modelType = curveData.modelo && curveData.modelo.modelo;
  if (!modelType) {
    return null;
  }
  return parametersByModelType[modelType](curveData);
};

const thomasParameters = (curveData) => {
  const {
    [THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION]: conc,
    [THOMAS_REQUEST_FIELDS.FLOW]: flow,
    [THOMAS_REQUEST_FIELDS.ADSORBENT_MASS]: mass,
  } = curveData.request;
  return `F=${flow}; C0=${conc}; W=${mass}`;
};
