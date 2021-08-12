import React from "react";
import {ProcessListContainer} from "../../containers/List/ProcessListContainer";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const ProcessesRoute = () => {
  return (
    <CommonPage>
      <ProcessListContainer />
    </CommonPage>
  );
};
