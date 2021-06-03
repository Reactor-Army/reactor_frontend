import React from "react";
import {Card} from "../Card";
import {
  CardHeader,
  HeaderText,
  BodyText,
  CardBody,
  Section,
} from "../CommonCardStyles";
import {useHistory} from "react-router-dom";
import {SBetValue} from "./SBetValue";
import {VBetValue} from "./VBetValue";
import {adsorbentDetailUrlFor, URLS} from "../../../routing/urls";
import {Link} from "../../../common/styles";
import {Formula} from "./Formula";
import {ParticleSize} from "./ParticleSize";
import {Impurities} from "./Impurities";
import {SpeciesName} from "./SpeciesName";
import {SampleOrigin} from "./SampleOrigin";
import {Ph} from "./Ph";

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
        <Section>
          <Formula formula={"placeholder"} />
          <ParticleSize particleSize={particleSize} />
        </Section>

        <Section>
          <Impurities impurities={"placeholder"} />
          <SpeciesName speciesName={"placeholder"} />
        </Section>

        <Section>
          <SampleOrigin sampleOrigin={"placeholder"} />
        </Section>

        <Section>
          <SBetValue sBet={sBet} />
          <VBetValue vBet={vBet} />
          <Ph vBet={ph} />
        </Section>
      </CardBody>

      <BodyText>
        <Link onClick={onProcessClick}>Ver procesos</Link>
      </BodyText>
    </Card>
  );
};
