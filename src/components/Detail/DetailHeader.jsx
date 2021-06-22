import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {EditButton} from "./EditButton";
import {PageHeaderContanier} from "../../common/styles";

export const DetailHeader = ({title, url}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />
      <EditButton url={url} />
    </PageHeaderContanier>
  );
};
