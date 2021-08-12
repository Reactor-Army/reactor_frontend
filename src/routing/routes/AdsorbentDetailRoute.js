import React from "react";
import {useParams} from "react-router-dom";
import {AdsorbentDetailContainer} from "../../containers/Detail/AdsorbentDetailContainer";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const AdsorbentDetailRoute = () => {
  let {id} = useParams();

  return (
    <CommonPage>
      <AdsorbentDetailContainer adsorbentId={id} />
    </CommonPage>
  );
};
