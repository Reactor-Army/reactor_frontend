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

export const thomasCoefficients = (data) => {
  // Thomas Equation:
  // C/C0 = 1/1 + e^(a - bx)
  // with a = Kth / F * q0 * W
  // and b = Kth / F * C0
  return [
    (data.Kth / data.F) * data.q0 * data.W,
    (data.Kth / data.F) * data.C0,
  ];
};

export const yoonNelsonCoefficients = (data) => {
  // Yoon-Nelson equation
  // C/C0 = [e^(ax - b)]/[1 + e^(ax -b)]

  // with a = Kyn / F
  // and b = Kyn / t

  return [data.Kyn / data.F, data.Kyn * data.t];
};

export const generateEquation = (equationTemplate, coefficients) => {
  const digits = settings.MODEL_EQUATION_PRECISION_DIGITS;
  const [first, second] = coefficients.map((coef) => coef.toFixed(digits));
  return equationTemplate
    .replaceAll("first", first)
    .replaceAll("second", second);
};
