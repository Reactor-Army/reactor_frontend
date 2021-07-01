import {processNotNegative, removePeriods, phInRange} from "./validations";
import {ADSORBATE_FIELDS} from "../../common/text";

export const adsorbateFields = [
  {
    key: "nombreIon",
    label: ADSORBATE_FIELDS.ION_NAME,
    required: true,
  },
  {
    key: "nombreIUPAC",
    label: ADSORBATE_FIELDS.IUPAC_NAME,
    required: true,
  },
  {
    key: "cargaIon",
    label: ADSORBATE_FIELDS.ION_CHARGE,
    type: "number",
    // First example: just post-process the value
    processValue: removePeriods,
  },
  {
    key: "radioIonico",
    label: ADSORBATE_FIELDS.ION_RADIUS,
    type: "number",
    // Another example: call setError whenever we find a problem
    processValue: processNotNegative,
  },
  {
    key: "limiteVertido",
    label: ADSORBATE_FIELDS.SPILL_LIMIT,
    type: "number",
    processValue: processNotNegative,
  },
  {
    key: "formula",
    label: ADSORBATE_FIELDS.FORMULA,
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
