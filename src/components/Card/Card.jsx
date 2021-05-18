import React from "react";
import {CardContainer} from "./Styles";

export const Card = ({container, backgroundColor, children, onClick}) => {
  const CardClass = container || CardContainer;
  return (
    <CardClass
      onClick={onClick}
      theme={{
        bodyBackground: backgroundColor,
      }}>
      {children}
    </CardClass>
  );
};
