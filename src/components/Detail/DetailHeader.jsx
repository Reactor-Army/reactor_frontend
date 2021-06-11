import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {EditButton} from "./EditButton";
import {URLS} from "../../routing/urls";
import {PageHeaderContanier} from "../../common/styles";

export const DetailHeader = ({title}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />
      <EditButton url={URLS.ADSORBATE_CREATE} />
    </PageHeaderContanier>
  );
};
