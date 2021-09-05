import React from "react";
import iqaiLogo from "../../resources/images/iqai.png";
import laquisiheLogo from "../../resources/images/laquisihe.png";
import {
  Container,
  AppTitle,
  LogosContainer,
  Logo,
} from "./AppAdvertisementStyles";

export const AppAdvertisement = () => {
  return (
    <Container>
      <AppTitle>Reactor App</AppTitle>
      <LogosContainer>
        <Logo src={laquisiheLogo} alt="LaQuiSiHe" />
        <Logo src={iqaiLogo} alt="IQAI" />
      </LogosContainer>
    </Container>
  );
};
