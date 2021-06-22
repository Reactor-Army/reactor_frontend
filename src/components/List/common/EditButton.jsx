import React from "react";
import {FabNavigateButton} from "../../../common/FabNavigateButton";
import EditIcon from "@material-ui/icons/Edit";
import {ButtonContainer} from "./Styles";

export const EditButton = ({url}) => {
  return (
    <ButtonContainer>
      <FabNavigateButton url={url}>
        <EditIcon />
      </FabNavigateButton>
    </ButtonContainer>
  );
};
