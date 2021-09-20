import React from "react";
import {CardContainer} from "./Styles";

export const Card = ({
  container,
  backgroundColor,
  children,
  onClick,
  selected,
}) => {
  const CardClass = container || CardContainer;
  return (
    <CardClass
      onClick={onClick}
      selected={selected}
      theme={{
        bodyBackground: backgroundColor,
      }}>
      {children}
    </CardClass>
  );
};
