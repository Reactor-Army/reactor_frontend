import {Grid} from "@material-ui/core";
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
} from "../CommonCardStyles";
import {BodyText} from "./Styles";
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
        <Grid container direction="row">
          <BodyText>
            <FieldLabel>QMax:</FieldLabel>{" "}
            <FieldValue>{qMax} mmol/g</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>Tiempo de equilibrio:</FieldLabel>{" "}
            <FieldValue>{equilibriumTime} minutos</FieldValue>
          </BodyText>
        </Grid>
        <Grid container direction="row">
          <BodyText>
            <FieldLabel>Temperatura:</FieldLabel>{" "}
            <FieldValue>{temperature} °C</FieldValue>
          </BodyText>
          <BodyText>
            <FieldLabel>pH inicial:</FieldLabel>{" "}
            <FieldValue>{initialPH}</FieldValue>
          </BodyText>
        </Grid>
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
