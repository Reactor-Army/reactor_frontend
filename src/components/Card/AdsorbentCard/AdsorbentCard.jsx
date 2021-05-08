import React from "react";
import {Card} from "../Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  CardFooter,
  FooterItem,
  DataLabel,
} from "../CommonCardStyles";
import {useHistory} from "react-router-dom";

export const AdsorbentCard = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  header,
  particleSize,
  sBet,
  vBet,
  ph,
  id,
}) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`procesos/?adsorbente=${id}`);
  };
  return (
    <Card backgroundColor={bodyBackgroundColor} onClick={onClick}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <BodyText>
          <DataLabel>Tamaño de particula:</DataLabel> {particleSize}
        </BodyText>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <DataLabel>sBet:</DataLabel> {sBet}
        </FooterItem>
        <FooterItem>
          <DataLabel>vBet:</DataLabel> {vBet}
        </FooterItem>
        <FooterItem>
          <DataLabel>ph(carga cero):</DataLabel> {ph}
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
