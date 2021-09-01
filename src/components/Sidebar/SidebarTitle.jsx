import {TitleText, TitleContainer} from "./Styles";
import React from "react";

export const SidebarTitle = ({text}) => {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
    </TitleContainer>
  );
};
