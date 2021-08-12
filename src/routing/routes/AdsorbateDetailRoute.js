import React from "react";
import {useParams} from "react-router-dom";
import {AdsorbateDetailContainer} from "../../containers/Detail/AdsorbateDetailContainer";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const AdsorbateDetailRoute = () => {
  let {id} = useParams();

  return (
    <CommonPage>
      <AdsorbateDetailContainer adsorbateId={id} />
    </CommonPage>
  );
};
