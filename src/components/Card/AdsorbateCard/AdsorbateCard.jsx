import React from "react";
import {Card} from "../Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  Section,
} from "../CommonCardStyles";
import {IonCharge} from "./IonCharge";
import {IonRadius} from "./IonRadius";
import {useHistory} from "react-router-dom";
import {FormulaLabel} from "./FormulaLabel";
import {DischargeLimit} from "./DischargeLimit";
import {adsorbateDetailUrlFor, URLS} from "../../../routing/urls";
import {SeeMoreLink} from "../SeeMoreLink";
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
          <IonCharge ionCharge={ionCharge} />
        </Section>

        <Section>
          <IonRadius ionRadius={ionRadius} />
        </Section>

        <Section>
          <DischargeLimit dischargeLimit={dischargeLimit} />
        </Section>

        <SeeMoreLink onProcessClick={onProcessClick} />
      </CardBody>
    </Card>
  );
};
