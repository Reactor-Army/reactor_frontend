import React from "react";
import Typography from "@material-ui/core/Typography";
import {appColors, appFontFamily} from "../../common/styles";

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
        <a href="/adsorbatos" style={{color: appColors.primary}}>
          -Listado de Adsorbatos
        </a>
        <br />
        <a href="/adsorbentes" style={{color: appColors.primary}}>
          -Listado de Adsorbentes
        </a>
        <br />
        <a href="/procesos" style={{color: appColors.primary}}>
          -Listado de Procesos
        </a>
        <br />
        <a href="/adsorbente/ideal" style={{color: appColors.primary}}>
          -Busqueda de adsorbente ideal
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
