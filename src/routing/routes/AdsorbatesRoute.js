import React from "react";
import {AdsorbateListContainer} from "../../containers/List/AdsorbateListContainer";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const AdsorbatesRoute = () => {
  return (
    <CommonPage>
      <AdsorbateListContainer />
    </CommonPage>
  );
};
