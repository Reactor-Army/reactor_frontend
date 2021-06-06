import {PageTitle} from "../../../common/PageTitle";
import React from "react";
import {ListHeaderContainer} from "./Styles";
import {CreateButton} from "./CreateButton";
import {URLS} from "../../../routing/urls";

export const ListHeader = ({title}) => {
  return (
    <ListHeaderContainer>
      <PageTitle title={title} />
      <CreateButton url={URLS.ADSORBATE_CREATE} />
    </ListHeaderContainer>
  );
};
