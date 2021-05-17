import React from "react";
import {PageTitle} from "../../common/PageTitle";
import Container from "@material-ui/core/Container";
import {appFontFamily} from "../../common/styles";
import {WizardContainer} from "./Styles";
import {IdealAdsorbentSearchContainer} from "./Search/IdealAdsorbentSearchContainer";

export function IdealAdsorbentContainer() {
  return (
    <Container>
      <PageTitle
        title={"Adsorbente Ideal"}
        style={{fontFamily: appFontFamily.card}}
      />

      <WizardContainer>
        <p>¿Que adsorbato queres remover?</p>
      </WizardContainer>
      <IdealAdsorbentSearchContainer />
    </Container>
  );
}
