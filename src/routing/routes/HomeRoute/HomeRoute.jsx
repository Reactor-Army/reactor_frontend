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
  HeaderContainer,
} from "./HomeRouteStyles";
import iqaiLogo from "../../../resources/images/iqai.svg";
import laquisiheLogo from "../../../resources/images/laquisihe.svg";
import fiubaLogo from "../../../resources/images/fiubaLogo.svg";
import project from "../../../resources/images/project.svg";
import glass from "../../../resources/images/glass.svg";
import systems from "../../../resources/images/systems.svg";
import adsorbate from "../../../resources/images/adsorbates.svg";
import adsorbent from "../../../resources/images/adsorbents.svg";
import plot from "../../../resources/images/plot.svg";
import {useSelector} from "react-redux";

export const HomeRoute = () => {
  const history = useHistory();
  const {loggedIn} = useSelector((state) => state.auth);

  return (
    <HomePageContainer>
      <HeaderContainer>
        <Header>Reactor App</Header>
      </HeaderContainer>

      <CardsContainer>
        <ExpandableCard
          icon={project}
          text="Sobre el proyecto"
          onClick={() => {
            history.push(URLS.ABOUT_US);
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
          icon={systems}
          text="Sistemas"
          onClick={() => {
            history.push(URLS.PROCESSES_LIST);
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
          icon={glass}
          text="Volumen del reactor"
          onClick={() => {
            history.push(URLS.PROCESS_EFFLUENT_VOLUME);
          }}
        />
        <ExpandableCard
          icon={plot}
          text="Modelos de Curvas de Ruptura"
          onClick={() => {
            history.push(URLS.MODEL_SELECTION);
          }}
        />
        {loggedIn && (
          <ExpandableCard
            icon={plot}
            text="Cálculo de áreas de curvas"
            onClick={() => {
              history.push(URLS.CHART_AREA);
            }}
          />
        )}
      </CardsContainer>
      <ImageContainer>
        <Image src={fiubaLogo} alt="Logo Fiuba" />
        <Image src={iqaiLogo} alt="Logo Iqai" />
        <Image src={laquisiheLogo} alt="Logo Laquisihe" />
      </ImageContainer>
    </HomePageContainer>
  );
};
