import {Grid} from "@material-ui/core";
import React from "react";
import {appColors} from "../../common/styles";
import {BooleanChip} from "../BooleanChip/BooleanChip";
import {NameChip} from "../NameChip/NameChip";
import {
  CardHeader,
  CardBody,
  CardFooter,
  FooterItem,
  DataLabel,
} from "../Card/CommonCardStyles";
import {CardProcess, BodyText} from "./Styles";

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
}) => {
  return (
    <CardProcess backgroundColor={bodyBackgroundColor}>
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
        <Grid container direction="row" alignItems="left">
          <BodyText>
            <DataLabel>QMax:</DataLabel> {qMax}
          </BodyText>
          <BodyText>
            <DataLabel>Tiempo de equilibrio:</DataLabel> {equilibriumTime} Segs
          </BodyText>
        </Grid>
        <Grid container direction="row" alignItems="left">
          <BodyText>
            <DataLabel>Temperatura:</DataLabel> {temperature} °C
          </BodyText>
          <BodyText>
            <DataLabel>PH inicial:</DataLabel> {initialPH}
          </BodyText>
        </Grid>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <BooleanChip value={complexation} text={"Complejacion"} />
        </FooterItem>
        <FooterItem>
          <BooleanChip value={ionicInterchange} text={"Intercambio Ionico"} />
        </FooterItem>
        <FooterItem>
          <BooleanChip value={chemicalReaction} text={"Reaccion Quimica"} />
        </FooterItem>
      </CardFooter>
    </CardProcess>
  );
};
