import {processNotNegative, removePeriods} from "./validations";

export const adsorbateFields = [
  {
    key: "nombreIon",
    label: "Nombre del ion",
    required: true,
  },
  {
    key: "nombreIUPAC",
    label: "Nombre IUPAC",
    required: true,
  },
  {
    key: "cargaIon",
    label: "Carga iónica",
    type: "number",
    // First example: just post-process the value
    processValue: removePeriods,
  },
  {
    key: "radioIonico",
    label: "Radio iónico",
    type: "number",
    // Another example: call setError whenever we find a problem
    processValue: processNotNegative,
  },
  {
    key: "limiteVertido",
    label: "Límite de vertido",
    type: "number",
    processValue: processNotNegative,
  },
  {
    key: "formula",
    label: "Fórmula",
  },
];
