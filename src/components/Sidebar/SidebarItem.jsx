import {LinkContainer, LinkText} from "./Styles";
import React from "react";

export const SidebarItem = ({text, onClick}) => {
  return (
    <LinkContainer onClick={onClick}>
      <LinkText>{text}</LinkText>
    </LinkContainer>
  );
};
