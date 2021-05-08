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
export const AdsorbateCard = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  header,
  ionCharge,
  ionRadius,
  dischargeLimit,
  id,
}) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`procesos/?adsorbato=${id}`);
  };
  return (
    <Card backgroundColor={bodyBackgroundColor} onClick={onClick}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <BodyText>
          <DataLabel>Carga del ion:</DataLabel> {ionCharge}
        </BodyText>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <DataLabel>Radio ionico:</DataLabel> {ionRadius}
        </FooterItem>
        <FooterItem>
          <DataLabel>Limite de vertido:</DataLabel> {dischargeLimit}
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
