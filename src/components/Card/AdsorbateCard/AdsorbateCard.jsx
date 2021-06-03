import React from "react";
import {Card} from "../Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
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
        <Section>
          <BodyText>
            <FormulaLabel
              formula={formula}
              ionChargeFormula={ionChargeFormula}
            />
          </BodyText>
          <BodyText>
            <FieldLabel>Carga del ion:</FieldLabel>
            <FieldValue>{ionCharge}</FieldValue>
          </BodyText>
        </Section>

        <Section>
          <BodyText>
            <FieldLabel>Radio hidrodinámico:</FieldLabel>
            <FieldValue>{ionRadius} Å</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>Masa Molar:</FieldLabel>
            <FieldValue>{2000} g/mol</FieldValue>
          </BodyText>
        </Section>

        <Section>
          <BodyText>
            <FieldLabel>Límite de vertido(Ley 24.051):</FieldLabel>
            <FieldValue>{dischargeLimit}</FieldValue>
          </BodyText>
        </Section>

        <BodyText>
          <Link onClick={onProcessClick}>Ver procesos</Link>
        </BodyText>
      </CardBody>
    </Card>
  );
};
