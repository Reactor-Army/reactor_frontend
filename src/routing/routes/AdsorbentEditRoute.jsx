import {useParams} from "react-router-dom";
import React from "react";
import {AdsorbentEditForm} from "../../components/Create/AdsorbentEditForm";

export const AdsorbentEditRoute = () => {
  let {id} = useParams();

  return <AdsorbentEditForm id={id} />;
};
