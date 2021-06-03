import {Chip} from "@material-ui/core";
import React from "react";

export const NameChip = ({
  name,
  backgroundColor,
  fontSize = 18,
  margin = "5px",
  fontWeight = "bold",
}) => {
  return (
    <Chip
      style={{
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        margin: margin,
        overflowX: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "300px",
      }}
      label={name}></Chip>
  );
};
