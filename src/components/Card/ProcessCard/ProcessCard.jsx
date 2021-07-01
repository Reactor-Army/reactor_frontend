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
import {PROCESS_FIELDS} from "../../../common/text";

export const ProcessCard = ({
  headerBackgroundColor,
  bodyBackgroundColor,
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
    <Card backgroundColor={bodyBackgroundColor} onClick={browseToProcessDetail}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
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
            <FieldValue>{qMax} mmol/g</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.EQUILIBRIUM_TIME}:</FieldLabel>
            <FieldValue>{equilibriumTime} minutos</FieldValue>
          </BodyText>
        </ProcessSection>
        <ProcessSection>
          <BodyText>
            <FieldLabel>{PROCESS_FIELDS.TEMPERATURE}:</FieldLabel>
            <FieldValue>{temperature} °C</FieldValue>
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
