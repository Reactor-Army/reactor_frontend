import Fab from "@material-ui/core/Fab";
import React from "react";
import {useHistory} from "react-router-dom";

export const FabNavigateButton = ({url, children}) => {
  const history = useHistory();

  const onClick = () => {
    history.push(url);
  };

  return (
    <Fab color="primary" aria-label="add" onClick={onClick}>
      {children}
    </Fab>
  );
};
