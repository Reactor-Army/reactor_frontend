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
            <FieldLabel>QMax:</FieldLabel>
            <FieldValue>{qMax} mmol/g</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>Tiempo de equilibrio:</FieldLabel>
            <FieldValue>{equilibriumTime} minutos</FieldValue>
          </BodyText>
        </ProcessSection>
        <ProcessSection>
          <BodyText>
            <FieldLabel>Temperatura:</FieldLabel>
            <FieldValue>{temperature} °C</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>pH inicial:</FieldLabel>
            <FieldValue>{initialPH}</FieldValue>
          </BodyText>
        </ProcessSection>

        <ChipSection>
          <BooleanChip value={complexation} text={"Complejación"} />
          <BooleanChip value={ionicInterchange} text={"Intercambio Iónico"} />
          <BooleanChip value={ionicInterchange} text={"Intercambio Iónico"} />
          <BooleanChip value={ionicInterchange} text={"Intercambio Iónico"} />

          <BooleanChip value={chemicalReaction} text={"Reacción química"} />
        </ChipSection>
      </CardBody>
    </Card>
  );
};
