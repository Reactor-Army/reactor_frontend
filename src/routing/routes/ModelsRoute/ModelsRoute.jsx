import React from "react";
import {PageContainer} from "../AboutUsRoute/AboutUsRouteStyles";
import {
  ModelPickCard,
  PickCardSection,
  EquationImg,
  ContentFrame,
} from "./ModelsRouteStyles";
import thomas from "../../../resources/images/thomas.png";
import adamsBohart from "../../../resources/images/adams-bohart.png";
import yoonNelson from "../../../resources/images/yoon-nelson.png";

export const ModelsRoute = () => {
  return (
    <PageContainer>
      <ContentFrame>
        <ModelPickCard>
          <PickCardSection>
            Left
            Sectionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
          </PickCardSection>
          <PickCardSection>
            <EquationImg src={thomas} alt="Thomas model" />
          </PickCardSection>
        </ModelPickCard>
        <ModelPickCard>
          <PickCardSection>Left Section</PickCardSection>
          <PickCardSection>
            <EquationImg src={adamsBohart} alt="Adams-Bohart model" />
          </PickCardSection>
        </ModelPickCard>
        <ModelPickCard>
          <PickCardSection>Left Section</PickCardSection>
          <PickCardSection>
            <EquationImg src={yoonNelson} alt="Yoon-Nelson model" />
          </PickCardSection>
        </ModelPickCard>
      </ContentFrame>
    </PageContainer>
  );
};
