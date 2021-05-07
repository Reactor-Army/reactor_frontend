import {Grid} from "@material-ui/core";
import React from "react";
import {Card} from "../Card/Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  CardFooter,
  FooterItem,
  DataLabel,
} from "./Styles";

export const ProcessCard = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  header,
  qMax,
  equilibriumTime,
  temperature,
  initialPH,
  complexation,
  ionicInterchange,
  chemicalReaction,
}) => {
  return (
    <Card backgroundColor={bodyBackgroundColor}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <Grid container direction="row" alignItems="left">
          <BodyText>
            <DataLabel>QMax:</DataLabel> {qMax}
          </BodyText>
          <BodyText>
            <DataLabel>Tiempo de equilibrio:</DataLabel> {equilibriumTime}
          </BodyText>
          <BodyText>
            <DataLabel>Temperatura:</DataLabel> {temperature}
          </BodyText>
          <BodyText>
            <DataLabel>PH inicial:</DataLabel> {initialPH}
          </BodyText>
        </Grid>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <DataLabel>Complejacion:</DataLabel> {complexation}
        </FooterItem>
        <FooterItem>
          <DataLabel>Intercambio ionico:</DataLabel> {ionicInterchange}
        </FooterItem>
        <FooterItem>
          <DataLabel>Reaccion quimica:</DataLabel> {chemicalReaction}
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
