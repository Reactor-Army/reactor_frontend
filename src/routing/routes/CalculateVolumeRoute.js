import React from "react";
import {CalculateVolumeViewContainer} from "../../containers/CalculateVolumeViewContainer";
import {useParams} from "react-router-dom";

export const CalculateVolumeRoute = () => {
  const {id} = useParams();
  return <CalculateVolumeViewContainer id={id} />;
};
