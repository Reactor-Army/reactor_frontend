import React from "react";
import {AdsorbentCreateContainer} from "../../containers/Create/AdsorbentCreateContainer";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const AdsorbentCreateRoute = () => {
  return (
    <CommonPage>
      <AdsorbentCreateContainer />
    </CommonPage>
  );
};
