import React from "react";
import {useParams} from "react-router-dom";
import {AdsorbentDetailContainer} from "../../containers/Detail/AdsorbentDetailContainer";

export const AdsorbentDetailRoute = () => {
  let {id} = useParams();

  return <AdsorbentDetailContainer adsorbentId={id} />;
};
