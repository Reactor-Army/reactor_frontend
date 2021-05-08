import React from "react";
import {CardContainer} from "./Styles";

export const Card = ({backgroundColor, children, onClick}) => {
  return (
    <CardContainer
      onClick={onClick}
      theme={{
        bodyBackground: backgroundColor,
      }}>
      {children}
    </CardContainer>
  );
};
