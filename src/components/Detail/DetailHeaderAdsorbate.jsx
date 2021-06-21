import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {EditButton} from "./EditButton";
import {adsorbateEditUrlFor} from "../../routing/urls";
import {PageHeaderContanier} from "../../common/styles";

export const DetailHeaderAdsorbate = ({title, id}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />
      <EditButton url={adsorbateEditUrlFor(id)} />
    </PageHeaderContanier>
  );
};
