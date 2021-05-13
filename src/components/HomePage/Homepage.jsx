import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {appColors, appFontFamily} from "../../common/styles";
import {HomeTitle} from "./Styles";

export function Homepage() {
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: "50px",
      }}>
      <HomeTitle>Reactor App </HomeTitle>
      <Typography style={{fontSize: "25px", fontFamily: appFontFamily.primary}}>
        <p>
          <b>Reactor App</b> es el producto de un trabajo profesional de Ing. en
          informática en colaboración con el departamento de Química y está
          enmarcado en el Proyecto de Desarrollo Estratégico{" "}
          <b>
            Metodología para el dimensionamiento de un reactor prototipo para el
            tratamiento de efluentes.
          </b>
          <br />
          El objetivo de la aplicación es brindar una herramienta informática
          para la resolución de problemas que involucran el diseño de reactores
          Adsorbato - Adsorbente.
          <br />
          <br />
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
          <br />
          <br />
          <br />
          <b>Autores:</b>
          <br />
          - Lucas Lavandeira <br />
          - Santiago Pinto <br />
          - Matias Reimondo <br />
        </p>
      </Typography>
    </Container>
  );
}
