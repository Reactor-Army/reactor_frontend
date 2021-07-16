import {Typography} from "@material-ui/core";
import React from "react";
import {LabelContainer, LongTextContainer} from "./Styles";

export const LongText = ({label, value}) => {
  return (
    <>
      <LabelContainer>
        <Typography style={{fontWeight: "bold"}}>{label}:</Typography>
      </LabelContainer>

      <LongTextContainer>
        <Typography>{value || "-"}</Typography>
      </LongTextContainer>
    </>
  );
};
