import {Chip} from "@material-ui/core";
import React from "react";

export const NameChip = ({name, backgroundColor}) => {
  return (
    <Chip
      style={{
        backgroundColor: backgroundColor,
        fontSize: 18,
        fontWeight: "bold",
        margin: "5px",
        overflowX: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
      label={name}></Chip>
  );
};
