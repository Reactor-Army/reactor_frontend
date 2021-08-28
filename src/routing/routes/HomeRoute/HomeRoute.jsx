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
import light from "../../../resources/images/light.png";
import glass from "../../../resources/images/glass.png";
import systems from "../../../resources/images/quimica.png";
import adsorbate from "../../../resources/images/violetVial.png";
import adsorbent from "../../../resources/images/greenVial.png";

export const HomeRoute = () => {
  const history = useHistory();
  return (
    <HomePageContainer>
      <Header>Reactor App</Header>
      <CardsContainer>
        <ExpandableCard
          icon={light}
          text="Sobre el proyecto"
          onClick={() => {
            history.push(URLS.ABOUT_US);
          }}
        />
        <ExpandableCard
          icon={glass}
          text="Buscar adsorbente"
          onClick={() => {
            history.push(URLS.BEST_ADSORBENT);
          }}
        />
        <ExpandableCard
          icon={systems}
          text="Sistemas"
          onClick={() => {
            history.push(URLS.PROCESSES_LIST);
          }}
        />
        <ExpandableCard
          icon={adsorbate}
          text="Adsorbatos"
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />

        <ExpandableCard
          icon={adsorbent}
          text="Adsorbentes"
          onClick={() => {
            history.push(URLS.ADSORBENTS_LIST);
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
