import {PageTitle} from "../../../common/PageTitle";
import React from "react";
import {CreateButton} from "./CreateButton";
import {PageHeaderContanier} from "../../../common/styles";

export const ListHeader = ({title, creationUrl}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />
      <CreateButton url={creationUrl} />
    </PageHeaderContanier>
  );
};
