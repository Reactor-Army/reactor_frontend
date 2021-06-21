import {processNotNegative, removePeriods, phInRange} from "./validations";

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

export const adsorbentFields = [
  {
    key: "nombre",
    label: "Nombre del adsorbente",
    required: true,
  },
  {
    key: "particulaT",
    label: "Tamaño de partícula",
    required: true,
  },
  {
    key: "sBet",
    label: "sBet",
    type: "number",
    processValue: processNotNegative,
  },
  {
    key: "vBet",
    label: "vBet",
    type: "number",
    processValue: processNotNegative,
  },
  {
    key: "pHCargaCero",
    label: "pH (carga cero)",
    type: "number",
    processValue: phInRange,
  },
  {
    key: "formula",
    label: "Fórmula",
  },
  {
    key: "impurezas",
    label: "Impurezas",
  },
  {
    key: "origenMuestra",
    label: "Origen de la muestra",
  },
  {
    key: "nombreEspecie",
    label: "Nombre de la especie",
  },
];
