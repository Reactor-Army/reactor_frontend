import {Chip} from "@material-ui/core";
import React from "react";

export const BooleanChip = ({
  value,
  text,
  fontSize = 15,
  margin = "2px",
  backgroundColor,
}) => {
  if (value) {
    return (
      <Chip
        style={{
          fontSize: fontSize,
          margin: margin,
          backgroundColor: backgroundColor,
          whiteSpace: "no-wrap",
          maxWidth: 170,
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
        label={text}
      />
    );
  } else {
    return null;
  }
};
