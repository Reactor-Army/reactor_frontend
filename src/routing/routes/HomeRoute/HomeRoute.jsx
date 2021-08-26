import React from "react";
import {ExpandableCard} from "../../../components/ExpandableCard/ExpandableCard";
import {useHistory} from "react-router-dom";
import {URLS} from "../../urls";
import {HomePageContainer} from "./HomeRouteStyles";

export const HomeRoute = () => {
  const history = useHistory();
  return (
    <HomePageContainer>
      <ExpandableCard
        onClick={() => {
          history.push(URLS.ADSORBATES_LIST);
        }}
      />
    </HomePageContainer>
  );
};
