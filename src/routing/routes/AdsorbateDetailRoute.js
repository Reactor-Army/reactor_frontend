import React from "react";
import {useParams} from "react-router-dom";
import {AdsorbateDetailContainer} from "../../containers/Detail/AdsorbateDetailContainer";

export const AdsorbateDetailRoute = () => {
  let {id} = useParams();

  return <AdsorbateDetailContainer adsorbateId={id} />;
};
