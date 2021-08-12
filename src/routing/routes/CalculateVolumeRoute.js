import React from "react";
import {CalculateVolumeViewContainer} from "../../containers/CalculateVolumeViewContainer";
import {useParams} from "react-router-dom";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const CalculateVolumeRoute = () => {
  const {id} = useParams();
  return (
    <CommonPage>
      <CalculateVolumeViewContainer id={id} />
    </CommonPage>
  );
};
