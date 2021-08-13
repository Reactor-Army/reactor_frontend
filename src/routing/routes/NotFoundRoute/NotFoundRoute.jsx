import React from "react";
import fiubaImg from "../../../resources/images/fiuba.png";
import {
  ImageContainer,
  Image,
  PageContainer,
  NotFoundText,
  ErrorCodeText,
} from "./NotFoundRouteStyles";
import {HomeLink} from "./NotFoundRouteStyles";
import {URLS} from "../../urls";

export const NotFoundRoute = () => {
  return (
    <PageContainer>
      <ErrorCodeText>404</ErrorCodeText>
      <ImageContainer>
        <Image src={fiubaImg} alt="" />
      </ImageContainer>
      <NotFoundText>
        La página a la que intentaste acceder no existe
      </NotFoundText>
      <HomeLink href={URLS.HOME}>Volver a la página de inicio</HomeLink>
    </PageContainer>
  );
};
