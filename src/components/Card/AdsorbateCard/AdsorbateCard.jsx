import React from "react";
import {Card} from "../Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  CardFooter,
  FooterItem,
  DataLabel,
  Section,
} from "../CommonCardStyles";
import {useHistory} from "react-router-dom";
import {FormulaLabel} from "./FormulaLabel";
import {URLS} from "../../../routing/urls";
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
    history.push(`${URLS.PROCESSES_LIST}/?adsorbato=${id}`);
  };
  return (
    <Card backgroundColor={bodyBackgroundColor} onClick={onClick}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <Section displayAsRow={true}>
          <BodyText>
            <FormulaLabel
              formula={formula}
              ionChargeFormula={ionChargeFormula}
            />
          </BodyText>
          <BodyText>
            <DataLabel>Carga del ion:</DataLabel> {ionCharge}
          </BodyText>
        </Section>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <DataLabel>Radio iónico:</DataLabel> {ionRadius} Å
        </FooterItem>
        <FooterItem>
          <DataLabel>Límite de vertido:</DataLabel> {dischargeLimit}
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
