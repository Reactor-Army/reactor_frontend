import React from "react";
import {AdsorbentListContainer} from "../../containers/List/AdsorbentListContainer";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const AdsorbentsRoute = () => {
  return (
    <CommonPage>
      <AdsorbentListContainer />
    </CommonPage>
  );
};
