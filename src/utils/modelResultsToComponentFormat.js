import {UNITS} from "../common/fields";

export const modelResultToComponent = (data) => {
  // Básicamente mapear la response del backend a lo esperado por nuestros
  // Components
  return [
    {
      // eslint-disable-next-line id-length
      F: data.request.caudalVolumetrico,
      // eslint-disable-next-line id-length
      W: data.request.sorbenteReactor,
      C0: data.request.concentracionInicial,
      Kth: data.response.constanteThomas,
      q0: data.response.concentracionMaximaSoluto,
      points: data.response.observaciones.map((observation) => [
        observation.x,
        observation.y,
      ]),
      Kyn: data.response.constanteYoonNelson,
      // eslint-disable-next-line id-length
      t: data.response.tiempoCincuentaPorciento,
      U0: data.request.velocidadLineal,
      // eslint-disable-next-line id-length
      Z: data.request.alturaLechoReactor,
      Kab: data.response.constanteAdamsBohart,
      N0: data.response.capacidadMaximaAbsorcion,
      modelType: data.modelo.modelo,
      modelName: data.modelo.nombreVerbose,
      adsorbateName: data.sistema.adsorbato.nombreIUPAC,
      adsorbentName: `${data.sistema.adsorbente.nombre} (${data.sistema.adsorbente.particulaT})${UNITS.PARTICLE_SIZE}`,
    },
  ];
};
