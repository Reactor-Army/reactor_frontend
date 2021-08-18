export const ADSORBATE_FIELDS = {
  ION_NAME: "Nombre del Ion",
  IUPAC_NAME: "Nombre IUPAC",
  ION_CHARGE: "Carga iónica",
  ION_RADIUS: "Radio hidrodinámico",
  SPILL_LIMIT: "Límite de vertido (Ley 24.051)",
  FORMULA: "Fórmula",
  MOLAR_MASS: "Masa molar",
};

export const ADSORBENT_FIELDS = {
  NAME: "Nombre",
  PARTICLE_SIZE: "Tamaño de partícula",
  SBET: "sBet",
  VBET: "vBet",
  PH: "pH (carga cero)",
  IMPURITIES: "Impurezas",
  SOURCE: "Origen de la muestra",
  SPECIES_NAME: "Nombre de la especie",
  NOTES: "Observaciones",
};

export const PROCESS_FIELDS = {
  ADSORBATE: "Adsorbato",
  ADSORBENT: "Adsorbente",
  QMAX: "qMax",
  EQUILIBRIUM_TIME: "Tiempo de equilibrio",
  TEMPERATURE: "Temperatura",
  INITIAL_PH: "pH inicial",
  KINETIC_CONSTANT: "Constante cinética",
  REACTION_ORDER: "Orden de reacción",
  COMPLEXATION: "Complejación",
  IONIC_INTERCHANGE: "Intercambio iónico",
  CHEMICAL_REACTION: "Reacción química",
  SOURCE: "Fuente",
  NOTES: "Observaciones",
};

export const UNITS = {
  ION_RADIUS: "Å",
  SPILL_LIMIT: "L",
  MOLAR_MASS: "g/mol",
  SBET: "m²/g",
  VBET: "cm³/g",
  QMAX: "mmol/g",
  EQUILIBRIUM_TIME: "minutos",
  TEMPERATURE: "°C",
  KINETIC_CONSTANT_FIRST_ORDER: "(min)⁻¹",
  KINETIC_CONSTANT_SECOND_ORDER: "(min*mmol)⁻¹",
  DISCHARGE: "mL/min",
  CONCENTRATION: "mmol/L",
  VOLUME: "mL",
};

export const ADSORBATE_REQUEST_FIELDS = {
  ION_NAME: "nombreIon",
  IUPAC_NAME: "nombreIUPAC",
  ION_CHARGE: "cargaIon",
  ION_RADIUS: "radioIonico",
  SPILL_LIMIT: "limiteVertido",
  FORMULA: "formula",
  MOLAR_MASS: "masaMolar",
};

export const ADSORBENT_REQUEST_FIELDS = {
  NAME: "nombre",
  PARTICLE_SIZE: "particulaT",
  SBET: "sBet",
  VBET: "vBet",
  PH: "pHCargaCero",
  FORMULA: "formula",
  IMPURITIES: "impurezas",
  SOURCE: "origenMuestra",
  SPECIES_NAME: "nombreEspecie",
  NOTES: "observaciones",
};

export const SYSTEM_REQUEST_FIELDS = {
  ADSORBATE: "idAdsorbato",
  ADSORBENT: "idAdsorbente",
  QMAX: "qmax",
  EQUILIBRIUM_TIME: "tiempoEquilibrio",
  PH: "phinicial",
  SOURCE: "fuente",
  TEMPERATURE: "temperatura",
  NOTES: "observacion",
  COMPLEXATION: "complejacion",
  IONIC_INTERCHANGE: "intercambioIonico",
  CHEMICAL_REACTION: "reaccionQuimica",
  KINETIC_CONSTANT: "constanteCinetica",
  REACTION_ORDER: "ordenReaccion",
};

export const THOMAS_MODEL_AXIS_LABELS = {
  X_LABEL: "Vef [L]",
  Y_LABEL: "C/C₀",
};

export const THOMAS_FIELDS = {
  FLOW: "Caudal volumétrico (F)",
  INITIAL_CONCENTRATION: "Concentración Inicial (C0)",
  ADSORBENT_MASS: "Masa del adsorbente (W)",
};

export const THOMAS_REQUEST_FIELDS = {
  FILE: "observaciones",
  FLOW: "caudalVolumetrico",
  INITIAL_CONCENTRATION: "concentracionInicial",
  ADSORBENT_MASS: "sorbenteReactor",
};
