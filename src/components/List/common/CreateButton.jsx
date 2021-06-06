import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import {useHistory} from "react-router-dom";

export const CreateButton = ({url}) => {
  const history = useHistory();

  const onClick = () => {
    history.push(url);
  };

  return (
    <Fab color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
};
