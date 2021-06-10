import {PageTitle} from "../../../common/PageTitle";
import React from "react";
import {ListHeaderContainer} from "./Styles";
import {CreateButton} from "./CreateButton";

export const ListHeader = ({title, creationUrl}) => {
  return (
    <ListHeaderContainer>
      <PageTitle title={title} />
      <CreateButton url={creationUrl} />
    </ListHeaderContainer>
  );
};
