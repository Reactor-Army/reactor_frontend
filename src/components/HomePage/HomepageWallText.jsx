import React from "react";
import Typography from "@material-ui/core/Typography";
import {appColors, appFontFamily} from "../../common/styles";
import {URLS} from "../../routing/urls";

export function HomepageWallText() {
  return (
    <Typography style={{fontSize: "25px", fontFamily: appFontFamily.primary}}>
      <p>
        <b>Reactor App</b> es el producto de un trabajo profesional de Ing. en
        informática en colaboración con el LaQuíSiHe (Laboratorio de Química de
        Sistemas Heterogéneos del IQAI (Instituto de Química Aplicado a la
        Ingeniería) y el Departamento de Gestión. Está enmarcado en el Proyecto
        de Desarrollo Estratégico 032/2020{" "}
        <b>
          Metodología para el dimensionamiento de un reactor prototipo para el
          tratamiento de efluentes
        </b>
        <br />
        El objetivo de esta aplicación es brindar una herramienta informática
        para la resolución de problemas que involucran el diseño de reactores
        Adsorbato - Adsorbente de bajo costo apuntando al tratamiento de aguas
        contaminadas.
        <br />
        <b>Funcionalidades actuales:</b>
        <br />
        <a href={URLS.ADSORBATES_LIST} style={{color: appColors.primary}}>
          - Listado de Adsorbatos
        </a>
        <br />
        <a href={URLS.ADSORBENTS_LIST} style={{color: appColors.primary}}>
          - Listado de Adsorbentes
        </a>
        <br />
        <a href={URLS.PROCESSES_LIST} style={{color: appColors.primary}}>
          - Listado de Procesos
        </a>
        <br />
        <a href={URLS.BEST_ADSORBENT} style={{color: appColors.primary}}>
          - Búsqueda del mejor adsorbente
        </a>
        <br />
        <br />
        <b>Autores:</b>
        <br />
        - Lucas Lavandeira <br />
        - Santiago Pinto <br />
        - Matias Reimondo <br />
      </p>
    </Typography>
  );
}
