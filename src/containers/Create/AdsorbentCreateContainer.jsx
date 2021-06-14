import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {AdsorbentCreateForm} from "../../components/Create/AdsorbentCreateForm";

export const AdsorbentCreateContainer = () => {
  return (
    <>
      <PageTitle title={"Agregar adsorbente"} />
      <AdsorbentCreateForm />
    </>
  );
};
