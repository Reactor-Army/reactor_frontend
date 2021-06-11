import {useParams} from "react-router-dom";
import {PageTitle} from "../../common/PageTitle";
import React from "react";
import {AdsorbateEditForm} from "../../components/Create/AdsorbateEditForm";

export const AdsorbateEditRoute = () => {
  let {id} = useParams();

  return (
    <>
      <PageTitle title={"Modificar Adsorbato"} />
      <AdsorbateEditForm id={id} />
    </>
  );
};
