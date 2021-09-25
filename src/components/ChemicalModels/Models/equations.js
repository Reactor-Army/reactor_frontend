import {settings} from "../../../config/settings";

export const adamsBohartCofficients = (data) => {
  // Adams Bohart equation:
  // C/C0 = e^(a * Vef - b)
  // with a = Kab * C0 / F
  // b = Kab * N0 * Z / U0
  return [
    (data.Kab * data.C0) / data.F,
    (data.Kab * data.N0 * data.Z) / data.U0,
  ];
};

export const generateEquation = (equationTemplate, coefficients) => {
  const digits = settings.MODEL_EQUATION_PRECISION_DIGITS;
  const [first, second] = coefficients.map((coef) => coef.toFixed(digits));
  return equationTemplate.replace("first", first).replace("second", second);
};
