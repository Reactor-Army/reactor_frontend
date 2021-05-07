import {Chip} from "@material-ui/core";
import React from "react";

export const BooleanChip = ({value, text}) => {
  if (value) {
    return (
      <Chip
        style={{
          fontSize: 15,
          margin: "2px",
        }}
        label={text}></Chip>
    );
  } else {
    return null;
  }
};
