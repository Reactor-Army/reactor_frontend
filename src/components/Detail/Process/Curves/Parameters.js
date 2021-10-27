import {MODEL_ALIAS} from "../../../../common/constants";
import {
  ADAMS_BOHART_REQUEST_FIELDS,
  THOMAS_REQUEST_FIELDS,
  YOON_NELSON_REQUEST_FIELDS,
} from "../../../../common/fields";

export const parameters = (curveData) => {
  const parametersByModelType = {
    [MODEL_ALIAS.THOMAS]: thomasParameters,
    [MODEL_ALIAS.YOON_NELSON]: yoonNelsonParameters,
    [MODEL_ALIAS.ADAMS_BOHART]: adamsBohartParameters,
  };
  const modelType = curveData.modelo && curveData.modelo.modelo;
  if (!modelType) {
    return null;
  }
  return parametersByModelType[modelType](curveData);
};

const thomasParameters = (curveData) => {
  const {
    [THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION]: concentration,
    [THOMAS_REQUEST_FIELDS.FLOW]: flow,
    [THOMAS_REQUEST_FIELDS.ADSORBENT_MASS]: mass,
  } = curveData.request;
  return `F=${flow}; C0=${concentration}; W=${mass}`;
};

const yoonNelsonParameters = (curveData) => {
  const {[YOON_NELSON_REQUEST_FIELDS.FLOW]: flow} = curveData.request;
  return `F=${flow};`;
};

const adamsBohartParameters = (curveData) => {
  const {
    [ADAMS_BOHART_REQUEST_FIELDS.FLOW]: flow,
    [ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION]: concentration,
    [ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY]: velocity,
    [ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT]: height,
  } = curveData.request;

  return `F=${flow}; Z=${height}; C0=${concentration}; U0=${velocity}`;
};
