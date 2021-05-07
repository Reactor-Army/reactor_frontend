import React from "react";
import {Card} from "../Card/Card";
import {
  CardHeader,
  HeaderText,
  ParticleSizeText,
  CardBody,
  CardFooter,
  FooterItem,
  DataLabel,
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
        <ParticleSizeText>
          <DataLabel>Tamaño de particula:</DataLabel> {particleSize}
        </ParticleSizeText>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <DataLabel>sBet:</DataLabel> {sBet}
        </FooterItem>
        <FooterItem>
          <DataLabel>vBet:</DataLabel> {vBet}
        </FooterItem>
        <FooterItem>
          <DataLabel>ph(carga cero):</DataLabel> {ph}
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
