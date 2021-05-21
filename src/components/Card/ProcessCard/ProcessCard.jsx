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
  DataLabel,
} from "../CommonCardStyles";
import {ProcessCardContainer, BodyText} from "./Styles";
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
    <Card
      backgroundColor={bodyBackgroundColor}
      container={ProcessCardContainer}
      onClick={browseToProcessDetail}>
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
            <DataLabel>QMax:</DataLabel> {qMax} mmol/g
          </BodyText>
          <BodyText>
            <DataLabel>Tiempo de equilibrio:</DataLabel> {equilibriumTime}{" "}
            minutos
          </BodyText>
        </Grid>
        <Grid container direction="row">
          <BodyText>
            <DataLabel>Temperatura:</DataLabel> {temperature} °C
          </BodyText>
          <BodyText>
            <DataLabel>pH inicial:</DataLabel> {initialPH}
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
