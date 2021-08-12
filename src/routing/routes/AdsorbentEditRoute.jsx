import {useParams} from "react-router-dom";
import React from "react";
import {AdsorbentEditForm} from "../../components/Create/AdsorbentEditForm";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const AdsorbentEditRoute = () => {
  let {id} = useParams();

  return (
    <CommonPage>
      <AdsorbentEditForm id={id} />
    </CommonPage>
  );
};
