import React from "react";
import {Card} from "../Card/Card";
import {
  CardHeader,
  HeaderText,
  IonChargeText,
  CardBody,
  CardFooter,
  FooterItem,
  DataLabel,
} from "./Styles";

export const AdsorbateCard = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  header,
  ionCharge,
  ionRadius,
  dischargeLimit,
}) => {
  return (
    <Card backgroundColor={bodyBackgroundColor}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <IonChargeText>
          <DataLabel>Carga del ion:</DataLabel> {ionCharge}
        </IonChargeText>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <DataLabel>Radio ionico:</DataLabel> {ionRadius}
        </FooterItem>
        <FooterItem>
          <DataLabel>Limite de vertido:</DataLabel> {dischargeLimit}
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
