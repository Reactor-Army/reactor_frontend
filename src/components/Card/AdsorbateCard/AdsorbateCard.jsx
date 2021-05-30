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
import {adsorbateDetailUrlFor, URLS} from "../../../routing/urls";
import {Link} from "../../../common/styles";
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
  const onProcessClick = (event) => {
    event.stopPropagation();
    history.push(`${URLS.PROCESSES_LIST}/?adsorbato=${id}`);
  };
  const onClick = () => {
    history.push(adsorbateDetailUrlFor(id));
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
              ionChargeFormula={ionChargeFormula}
            />
          </BodyText>
          <BodyText>
            <DataLabel>Carga del ion:</DataLabel> {ionCharge}
          </BodyText>
        </Grid>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <DataLabel>Radio iónico:</DataLabel> {ionRadius} Å
        </FooterItem>
        <FooterItem>
          <DataLabel>Límite de vertido:</DataLabel> {dischargeLimit}
        </FooterItem>
      </CardFooter>
      <BodyText>
        <Link onClick={onProcessClick}>Ver procesos</Link>
      </BodyText>
    </Card>
  );
};
