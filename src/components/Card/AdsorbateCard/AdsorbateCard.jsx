import React from "react";
import {Card} from "../Card";
import {Grid} from "@material-ui/core";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  CardFooter,
  FooterItem,
  DataLabel,
} from "../CommonCardStyles";
import {useHistory} from "react-router-dom";
import {FormulaLabel} from "./FormulaLabel";
export const AdsorbateCard = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  header,
  ionCharge,
  ionRadius,
  dischargeLimit,
  formula,
  ionChargeFormula,
  id,
}) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`procesos/?adsorbato=${id}`);
  };
  return (
    <Card backgroundColor={bodyBackgroundColor} onClick={onClick}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <Grid container direction="row">
          <BodyText>
            <FormulaLabel
              formula={formula}
              ionChargeFormula={ionChargeFormula}></FormulaLabel>
          </BodyText>
          <BodyText>
            <DataLabel>Carga del ion:</DataLabel> {ionCharge}
          </BodyText>
        </Grid>
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
