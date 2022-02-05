import {Typography} from "@material-ui/core";
import React from "react";
import {SectionHeaderContainer} from "./Styles";

export const SectionHeader = ({children}) => {
  return (
    <SectionHeaderContainer>
      <Typography>{children}</Typography>
    </SectionHeaderContainer>
  );
};
