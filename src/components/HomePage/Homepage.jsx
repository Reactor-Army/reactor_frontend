import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {appColors, appFontFamily} from "../../common/styles";
import {HomeTitle} from "./Styles";

export function Homepage() {
  return (
    <Container
      maxWidth="md"
      style={{backgroundColor: appColors.primary, marginTop: "50px"}}>
      <HomeTitle>Reactor App </HomeTitle>
      <Typography
        style={{color: appColors.white, fontFamily: appFontFamily.primary}}>
        <p>
          <b>Reactor App</b> te permite ver la lista de procesos filtrados por
          &nbsp;
          <b>
            <a href="/adsorbentes" style={{color: appColors.white}}>
              adsorbentes
            </a>
          </b>
          &nbsp; y adsorbatos. Para esto podes seleccionar el Adsorbente o
          Adsorbato que te interese estudiar y observar los procesos
          involucrados.
          <br />
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
