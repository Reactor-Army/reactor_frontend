import React from "react";
import {appColors} from "../../../common/styles";
import {BooleanChip} from "../../Chip/BooleanChip/BooleanChip";
import {NameChip} from "../../Chip/NameChip/NameChip";
import {
  CardHeader,
  CardBody,
  CardFooter,
  FooterItem,
  FieldLabel,
  FieldValue,
  Section,
  BodyText,
} from "../CommonCardStyles";
import {Card} from "../Card";
//import {useScreenWidth} from "../../../customHooks/useScreenWidth";

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
        <Section>
          <BodyText>
            <FieldLabel>QMax:</FieldLabel>{" "}
            <FieldValue>{qMax} mmol/g</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>Tiempo de equilibrio:</FieldLabel>{" "}
            <FieldValue>{equilibriumTime} minutos</FieldValue>
          </BodyText>
        </Section>
        <Section>
          <BodyText>
            <FieldLabel>Temperatura:</FieldLabel>{" "}
            <FieldValue>{temperature} °C</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>pH inicial:</FieldLabel>{" "}
            <FieldValue>{initialPH}</FieldValue>
          </BodyText>
        </Section>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <BooleanChip value={complexation} text={"Complejación"} />
        </FooterItem>
        <FooterItem>
          <BooleanChip value={ionicInterchange} text={"Intercambio Iónico"} />
        </FooterItem>
        <FooterItem>
          <BooleanChip value={chemicalReaction} text={"Reacción química"} />
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
