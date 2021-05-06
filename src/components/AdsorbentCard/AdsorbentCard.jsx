import React from "react";
import {Card} from "../Card/Card";
import {
  CardHeader,
  HeaderText,
  ParticleSizeText,
  CardBody,
  CardFooter,
  FooterItem,
} from "./Styles";

export const AdsorbentCard = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  header,
  particleSize,
  sBet,
  vBet,
  ph,
}) => {
  return (
    <Card backgroundColor={bodyBackgroundColor}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <ParticleSizeText>Tamaño de particula: {particleSize}</ParticleSizeText>
      </CardBody>
      <CardFooter>
        <FooterItem>sBet: {sBet}</FooterItem>
        <FooterItem>vBet: {vBet}</FooterItem>
        <FooterItem>ph(carga cero): {ph}</FooterItem>
      </CardFooter>
    </Card>
  );
};
