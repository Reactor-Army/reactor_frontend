import React from "react";
import {Card} from "../Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  CardFooter,
  FooterItem,
  FieldLabel,
  FieldValue,
} from "../CommonCardStyles";
import {useHistory} from "react-router-dom";
import {SBetValue} from "./SBetValue";
import {VBetValue} from "./VBetValue";
import {URLS} from "../../../routing/urls";

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
    history.push(`${URLS.PROCESSES_LIST}/?adsorbente=${id}`);
  };
  return (
    <Card backgroundColor={bodyBackgroundColor} onClick={onClick}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <BodyText>
          <FieldLabel>Tamaño de partícula: </FieldLabel>{" "}
          <FieldValue>{particleSize}</FieldValue>
        </BodyText>
      </CardBody>
      <CardFooter>
        <SBetValue sBet={sBet} />
        <VBetValue vBet={vBet} />
        <FooterItem>
          <FieldLabel>pH(carga cero):</FieldLabel> {ph}
        </FooterItem>
      </CardFooter>
    </Card>
  );
};
