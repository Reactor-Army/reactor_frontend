import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {EditButton} from "./EditButton";
import {adsorbentEditUrlFor} from "../../routing/urls";
import {PageHeaderContanier} from "../../common/styles";

export const DetailHeaderAdsorbent = ({title, id}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />
      <EditButton url={adsorbentEditUrlFor(id)} />
    </PageHeaderContanier>
  );
};
