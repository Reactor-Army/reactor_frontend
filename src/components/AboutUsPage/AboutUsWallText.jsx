import React from "react";
import Typography from "@material-ui/core/Typography";
import {appFontFamily, Link} from "../../common/styles";
import {URLS} from "../../routing/urls";
import {Paragraph} from "./AboutUsStyles";

export function AboutUsWallText() {
  return (
    <Typography
      component={"span"}
      style={{fontSize: "25px", fontFamily: appFontFamily.primary}}>
      <Paragraph>
        <b>Reactor App</b> es el producto de un trabajo profesional de Ing. en
        informática en colaboración con el LaQuíSiHe (Laboratorio de Química de
        Sistemas Heterogéneos del IQAI (Instituto de Química Aplicado a la
        Ingeniería) y el Departamento de Gestión. Está enmarcado en el Proyecto
        de Desarrollo Estratégico 032/2020&nbsp;
        <b>
          Metodología para el dimensionamiento de un reactor prototipo para el
          tratamiento de efluentes
        </b>
        <br />
        <br />
        El objetivo de esta aplicación es brindar una herramienta informática
        para la resolución de problemas que involucran el diseño de reactores
        Adsorbato - Adsorbente de bajo costo apuntando al tratamiento de aguas
        contaminadas.
        <br />
        <br />
        <b>Funcionalidades actuales:</b>
        <br />
        <Link href={URLS.ADSORBATES_LIST}>- Listado de Adsorbatos</Link>
        <br />
        <Link href={URLS.ADSORBENTS_LIST}>- Listado de Adsorbentes</Link>
        <br />
        <Link href={URLS.PROCESSES_LIST}>- Listado de Sistemas</Link>
        <br />
        <Link href={URLS.BEST_ADSORBENT}>- Búsqueda del mejor adsorbente</Link>
        <br />
        <br />
        <b>Autores:</b>
        <br />
        - Lucas Lavandeira <br />
        - Santiago Pinto <br />
        - Matias Reimondo <br />
      </Paragraph>
    </Typography>
  );
}
