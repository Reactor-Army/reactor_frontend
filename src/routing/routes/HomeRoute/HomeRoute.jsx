import React from "react";
import {ExpandableCard} from "../../../components/ExpandableCard/ExpandableCard";
import {useHistory} from "react-router-dom";
import {URLS} from "../../urls";
import {
  HomePageContainer,
  Header,
  ImageContainer,
  Image,
  CardsContainer,
} from "./HomeRouteStyles";
import iqaiLogo from "../../../resources/images/iqai.png";
import laquisiheLogo from "../../../resources/images/laquisihe.png";
import fiubaLogo from "../../../resources/images/fiuba.png";

export const HomeRoute = () => {
  const history = useHistory();
  return (
    <HomePageContainer>
      <Header>Reactor App</Header>
      <CardsContainer>
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />

        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
      </CardsContainer>
      <ImageContainer>
        <Image src={laquisiheLogo} alt="Logo Fiuba" />
        <Image src={fiubaLogo} alt="Logo Fiuba" />
        <Image src={iqaiLogo} alt="Logo Fiuba" />
      </ImageContainer>
    </HomePageContainer>
  );
};
