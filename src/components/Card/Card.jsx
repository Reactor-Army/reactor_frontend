import React from "react";
import {CardContainer} from "./Styles";

export const Card = ({backgroundColor, children}) => {
  return (
    <CardContainer theme={{background: backgroundColor}}>
      {children}
    </CardContainer>
  );
};
