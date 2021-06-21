import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import React from "react";
import {ButtonContainer} from "./Styles";

export const DeleteButton = ({onClick}) => {
  return (
    <ButtonContainer>
      <Fab color="primary" aria-label="delete" onClick={onClick}>
        <DeleteIcon />
      </Fab>
    </ButtonContainer>
  );
};
