import React from "react";
import {CardContainer} from "./Styles";

export const Card = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  children,
}) => {
  return (
    <CardContainer
      theme={{
        headerBackground: headerBackgroundColor,
        bodyBackground: bodyBackgroundColor,
      }}>
      {children}
    </CardContainer>
  );
};
