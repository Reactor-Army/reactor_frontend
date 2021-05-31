import {PageTitle} from "../../../common/PageTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import {ListHeaderContainer} from "./Styles";

export const ListHeader = ({title}) => {
  return (
    <ListHeaderContainer>
      <PageTitle title={title} />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </ListHeaderContainer>
  );
};
