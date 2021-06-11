import AddIcon from "@material-ui/icons/Add";
import React from "react";
import {FabNavigateButton} from "../../../common/FabNavigateButton";

export const CreateButton = ({url}) => {
  return (
    <FabNavigateButton url={url}>
      <AddIcon />
    </FabNavigateButton>
  );
};
