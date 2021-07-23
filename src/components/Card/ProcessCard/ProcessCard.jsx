import React from "react";
import {appColors} from "../../../common/styles";
import {BooleanChip} from "../../Chip/BooleanChip/BooleanChip";
import {NameChip} from "../../Chip/NameChip/NameChip";
import {
  CardHeader,
  CardBody,
  FieldLabel,
  FieldValue,
  ProcessSection,
  ChipSection,
  BodyText,
} from "../CommonCardStyles";
import {Card} from "../Card";
import {PROCESS_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";

export const ProcessCard = ({
  adsorbateName,
  adsorbentName,
  qMax,
  equilibriumTime,
  temperature,
  initialPH,
  complexation,
  ionicInterchange,
  chemicalReaction,
  browseToProcessDetail,
}) => {
  return (
    <Card
      backgroundColor={appColors.adsorbentCardBody}
      onClick={browseToProcessDetail}>
      <CardHeader theme={{backgroundColor: appColors.processCardHeader}}>
        <NameChip
          name={adsorbateName}
          backgroundColor={appColors.adsorbateCardHeader}
        />
        <NameChip
          name={adsorbentName}
          backgroundColor={appColors.adsorbentCardHeader}
        />
      </CardHeader>
      <CardBody>
        <ProcessSection>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.QMAX}:</FieldLabel>
            <FieldValue>{`${qMax} ${UNITS.QMAX}`}</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.EQUILIBRIUM_TIME}:</FieldLabel>
            <FieldValue>{`${equilibriumTime} ${UNITS.EQUILIBRIUM_TIME}`}</FieldValue>
          </BodyText>
        </ProcessSection>
        <ProcessSection>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.TEMPERATURE}:</FieldLabel>
            <FieldValue>{`${temperature} ${UNITS.TEMPERATURE}`}</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.INITIAL_PH}:</FieldLabel>
            <FieldValue>{initialPH}</FieldValue>
          </BodyText>
        </ProcessSection>

        <ChipSection>
          <BooleanChip
            value={complexation}
            text={PROCESS_FIELDS.COMPLEXATION}
          />
          <BooleanChip
            value={ionicInterchange}
            text={PROCESS_FIELDS.IONIC_INTERCHANGE}
          />
          <BooleanChip
            value={chemicalReaction}
            text={PROCESS_FIELDS.CHEMICAL_REACTION}
          />
        </ChipSection>
      </CardBody>
    </Card>
  );
};
