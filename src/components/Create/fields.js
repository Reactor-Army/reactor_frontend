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

export const processFields = [
  {
    key: "qmax",
    label: "QMax",
    type: "number",
    required: false,
    processValue: processNotNegative,
  },
  {
    key: "phinicial",
    label: "pH Inicial",
    type: "number",
    required: false,
    processValue: phInRange,
  },
  {
    key: "tiempoEquilibrio",
    label: "Tiempo de equilibrio (minutos)",
    type: "number",
    required: false,
    processValue: processNotNegative,
  },
  {
    key: "temperatura",
    label: "Temperatura (°C)",
    required: false,
    type: "number",
  },
  {
    key: "fuente",
    label: "Fuente",
    required: false,
  },
  {
    key: "intercambioIonico",
    label: "Intercambio Iónico",
    type: "selector",
    required: false,
  },
  {
    key: "reaccionQuimica",
    label: "Reacción química",
    type: "selector",
    required: false,
  },
  {
    key: "complejacion",
    label: "Complejación",
    type: "selector",
    required: false,
  },
  {
    key: "nombreEspecie",
    label: "Nombre de la especie",
    required: false,
  },
  {
    key: "observacion",
    label: "Observaciones",
    required: false,
  },
];
