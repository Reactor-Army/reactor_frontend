import React from "react";
import {ExpandableCard} from "../../../components/ExpandableCard/ExpandableCard";
import {useHistory} from "react-router-dom";
import {URLS} from "../../urls";
import {
  HomePageContainer,
  Header,
  ImageContainer,
  Image,
} from "./HomeRouteStyles";
import fiubaLogo from "../../../resources/images/fiuba.png";
import chemistry from "../../../resources/images/quimica.png";

export const HomeRoute = () => {
  const history = useHistory();
  return (
    <HomePageContainer>
      <Header>Reactor App</Header>
      <ImageContainer>
        <Image src={chemistry} alt="Logo Fiuba" />
        <Image src={fiubaLogo} alt="Logo Fiuba" />
      </ImageContainer>
      {false && (
        <ExpandableCard
          onClick={() => {
            history.push(URLS.ADSORBATES_LIST);
          }}
        />
      )}
    </HomePageContainer>
  );
};
