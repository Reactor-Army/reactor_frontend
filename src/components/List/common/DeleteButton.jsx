import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import React from "react";

export const DeleteButton = ({onClick}) => {
  return (
    <Fab color="primary" aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </Fab>
  );
};
