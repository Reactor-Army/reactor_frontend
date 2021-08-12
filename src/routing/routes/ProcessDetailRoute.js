import {ProcessDetailContainer} from "../../containers/Detail/ProcessDetailContainer";
import React from "react";
import {useParams} from "react-router-dom";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const ProcessDetailRoute = () => {
  let {id} = useParams();

  return (
    <CommonPage>
      <ProcessDetailContainer processId={id} />
    </CommonPage>
  );
};
