import React from "react";
import fiubaLogo from "../../resources/images/fiubaLogo.svg";
import {PageContainer, FiubaLogo, LoadingText} from "./LoadScreenStyles";
import {CircularProgress} from "@material-ui/core";

export const LoadScreen = ({loadingText}) => {
  return (
    <PageContainer>
      <FiubaLogo src={fiubaLogo} alt="Fiuba Logo" />
      <LoadingText>{loadingText}</LoadingText>
      <CircularProgress />
    </PageContainer>
  );
};
