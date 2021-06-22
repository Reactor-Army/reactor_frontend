import {useParams} from "react-router-dom";
import {PageTitle} from "../../common/PageTitle";
import React from "react";
import {AdsorbentEditForm} from "../../components/Create/AdsorbentEditForm";

export const AdsorbentEditRoute = () => {
  let {id} = useParams();

  return (
    <>
      <PageTitle title={"Modificar Adsorbente"} />
      <AdsorbentEditForm id={id} />
    </>
  );
};
