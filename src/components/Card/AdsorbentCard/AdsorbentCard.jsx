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
import {SBetValue} from "./SBetValue";
import {VBetValue} from "./VBetValue";
import {adsorbentDetailUrlFor, URLS} from "../../../routing/urls";
import {Link} from "../../../common/styles";

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
  const onProcessClick = (event) => {
    event.stopPropagation();
    history.push(`${URLS.PROCESSES_LIST}/?adsorbente=${id}`);
  };
  const onClick = () => {
    history.push(adsorbentDetailUrlFor(id));
  };
  return (
    <Card backgroundColor={bodyBackgroundColor} onClick={onClick}>
      <CardHeader theme={{backgroundColor: headerBackgroundColor}}>
        <HeaderText>{header}</HeaderText>
      </CardHeader>
      <CardBody>
        <BodyText>
          <DataLabel>Tamaño de partícula:</DataLabel> {particleSize}
        </BodyText>
      </CardBody>
      <CardFooter>
        <SBetValue sBet={sBet} />
        <VBetValue vBet={vBet} />
        <FooterItem>
          <DataLabel>pH(carga cero):</DataLabel> {ph}
        </FooterItem>
      </CardFooter>
      <BodyText>
        <Link onClick={onProcessClick}>Ver procesos</Link>
      </BodyText>
    </Card>
  );
};
