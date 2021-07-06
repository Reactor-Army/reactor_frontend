import {processNotNegative, removePeriods, phInRange} from "./validations";
import {ADSORBATE_FIELDS, ADSORBENT_FIELDS} from "../../common/fields";

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
    label: ADSORBENT_FIELDS.NAME,
    required: true,
  },
  {
    key: "particulaT",
    label: ADSORBENT_FIELDS.PARTICLE_SIZE,
    required: true,
  },
  {
    key: "sBet",
    label: ADSORBENT_FIELDS.SBET,
    type: "number",
    processValue: processNotNegative,
  },
  {
    key: "vBet",
    label: ADSORBENT_FIELDS.VBET,
    type: "number",
    processValue: processNotNegative,
  },
  {
    key: "pHCargaCero",
    label: ADSORBENT_FIELDS.PH,
    type: "number",
    processValue: phInRange,
  },
  {
    key: "formula",
    label: ADSORBATE_FIELDS.FORMULA,
  },
  {
    key: "impurezas",
    label: ADSORBENT_FIELDS.IMPURITIES,
  },
  {
    key: "origenMuestra",
    label: ADSORBENT_FIELDS.SOURCE,
  },
  {
    key: "nombreEspecie",
    label: ADSORBENT_FIELDS.SPECIES_NAME,
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
