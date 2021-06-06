import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {AdsorbateCreateForm} from "../../components/Create/AdsorbateCreateForm";

export const AdsorbateCreateContainer = () => {
  return (
    <>
      <PageTitle title={"Agregar adsorbato"} />
      <AdsorbateCreateForm />
    </>
  );
};
