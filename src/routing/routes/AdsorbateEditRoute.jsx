import {useParams} from "react-router-dom";
import {PageTitle} from "../../common/PageTitle";
import React from "react";
import {AdsorbateCreateForm} from "../../components/Create/AdsorbateCreateForm";

export const AdsorbateEditRoute = () => {
  let {id} = useParams();

  return (
    <>
      <PageTitle title={"Modificar Adsorbato"} />
      <AdsorbateCreateForm id={id} />
    </>
  );
};
