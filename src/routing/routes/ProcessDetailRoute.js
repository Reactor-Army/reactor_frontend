import {ProcessDetailContainer} from "../../containers/Detail/ProcessDetailContainer";
import React from "react";
import {useParams} from "react-router-dom";

export const ProcessDetailRoute = () => {
  let {id} = useParams();

  return <ProcessDetailContainer processId={id} />;
};
