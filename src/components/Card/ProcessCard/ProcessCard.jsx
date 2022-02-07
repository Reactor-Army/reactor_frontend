import React from "react";
import {appColors, Link} from "../../../common/styles";
import {NameChip} from "../../Chip/NameChip/NameChip";
import {
  CardHeader,
  CardBody,
  FieldLabel,
  ProcessSection,
  LinkContainer,
  BodyText,
} from "../CommonCardStyles";
import {Card} from "../Card";
import {PROCESS_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const ProcessCard = ({
  adsorbateName,
  adsorbentName,
  qMax,
  equilibriumTime,
  temperature,
  initialPH,
  onClick,
  selected,
}) => {
  return (
    <Card
      selected={selected}
      backgroundColor={appColors.softGray}
      onClick={onClick}>
      <CardHeader theme={{backgroundColor: appColors.gray}}>
        <NameChip name={adsorbateName} backgroundColor={appColors.purple} />
        <NameChip name={adsorbentName} backgroundColor={appColors.greenFluor} />
      </CardHeader>
      <CardBody>
        <ProcessSection>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.EQUILIBRIUM_TIME}:</FieldLabel>
            <CardValue value={equilibriumTime} units={UNITS.EQUILIBRIUM_TIME} />
          </BodyText>
        </ProcessSection>
        <ProcessSection>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.QMAX}:</FieldLabel>
            <CardValue value={qMax} units={UNITS.QMAX} />
          </BodyText>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.TEMPERATURE}:</FieldLabel>
            <CardValue value={temperature} units={UNITS.TEMPERATURE} />
          </BodyText>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.INITIAL_PH}:</FieldLabel>
            <CardValue value={initialPH} />
          </BodyText>
        </ProcessSection>

        <LinkContainer>
          <Link>Ver más</Link>
        </LinkContainer>
      </CardBody>
    </Card>
  );
};
