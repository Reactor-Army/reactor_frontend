import {
  THOMAS_REQUEST_FIELDS,
  ADAMS_BOHART_REQUEST_FIELDS,
  YOON_NELSON_REQUEST_FIELDS,
} from "./fields";

export const ENTER_KEY = "Enter";

export const SYSTEM_FORM_INITIAL_VALUES = {
  idAdsorbato: null,
  idAdsorbente: null,
  tiempoEquilibrio: "",
  qmax: "",
  phinicial: "",
  fuente: "",
  complejacion: false,
  intercambioIonico: false,
  reaccionQuimica: false,
  observacion: "",
  temperatura: "",
  ordenReaccion: "",
  constanteCinetica: "",
};

export const ADSORBATE_FORM_INITIAL_VALUES = {
  nombreIon: "",
  nombreIUPAC: "",
  cargaIon: "",
  radioIonico: "",
  limiteVertido: "",
  formula: "",
  masaMolar: "",
};

export const ADSORBENT_FORM_INITIAL_VALUES = {
  nombre: "",
  particulaT: "",
  sBet: "",
  vBet: "",
  pHCargaCero: "",
  formula: "",
  impurezas: "",
  origenMuestra: "",
  nombreEspecie: "",
  observaciones: "",
  ordenReaccion: "",
  constanteCinetica: "",
};

export const CALCULATE_VOLUME_FORM_INITIAL_VALUES = {
  caudal: "",
  concentracionInicial: "",
  concentracionFinal: "",
};

export const THOMAS_FORM_INITIAL_VALUES = {
  [THOMAS_REQUEST_FIELDS.FILE]: "",
  [THOMAS_REQUEST_FIELDS.FLOW]: "",
  [THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION]: "",
  [THOMAS_REQUEST_FIELDS.ADSORBENT_MASS]: "",
};

export const ADAMS_BOHART_FORM_INITIAL_VALUES = {
  [ADAMS_BOHART_REQUEST_FIELDS.FILE]: "",
  [ADAMS_BOHART_REQUEST_FIELDS.FLOW]: "",
  [ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION]: "",
  [ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY]: "",
  [ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT]: "",
};

export const YOON_NELSON_FORM_INITIAL_VALUES = {
  [YOON_NELSON_REQUEST_FIELDS.FILE]: "",
  [YOON_NELSON_REQUEST_FIELDS.FLOW]: "",
};

export const LOGIN_FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};
