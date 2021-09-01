import React from "react";
import {FabNavigateButton} from "../../../common/FabNavigateButton";
import EditIcon from "@material-ui/icons/Edit";

export const EditButton = ({url}) => {
  return (
    <FabNavigateButton url={url}>
      <EditIcon />
    </FabNavigateButton>
  );
};
