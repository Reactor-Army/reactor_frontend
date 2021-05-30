import React from "react";
import {Card} from "../Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  CardFooter,
  FooterItem,
  FieldLabel,
  FieldValue,
  Section,
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
        <Section displayAsRow={true}>
          <BodyText>
            <FormulaLabel
              formula={formula}
              ionChargeFormula={ionChargeFormula}
            />
          </BodyText>
          <BodyText>
            <FieldLabel>Carga del ion:</FieldLabel>{" "}
            <FieldValue>{ionCharge}</FieldValue>
          </BodyText>
        </Section>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <FieldLabel>Radio iónico:</FieldLabel> {ionRadius} Å
        </FooterItem>
        <FooterItem>
          <FieldLabel>Límite de vertido:</FieldLabel> {dischargeLimit}
        </FooterItem>
      </CardFooter>
      <BodyText>
        <Link onClick={onProcessClick}>Ver procesos</Link>
      </BodyText>
    </Card>
  );
};
