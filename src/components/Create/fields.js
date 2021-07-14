import {processNotNegative, phInRange} from "./validations";
import {ADSORBATE_FIELDS, ADSORBENT_FIELDS} from "../../common/fields";

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
