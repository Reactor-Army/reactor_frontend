import React, {useEffect, useState} from "react";
import {CalculateVolumeView} from "../components/CalculateVolumeView/CalculateVolumeView";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../redux/processSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import {calculateVolume} from "../services/calculateVolume";
import {VolumeResults} from "../components/CalculateVolumeView/VolumeResults";

export const CalculateVolumeViewContainer = ({id}) => {
  const dispatch = useDispatch();
  const process = useSelector((store) => store.process.process);
  useEffect(() => {
    if (!process) {
      dispatch(fetchProcess(id));
    }
  }, []);

  const [volume, setVolume] = useState(null);
  const onSubmit = async (values) => {
    const response = await calculateVolume(id, values);
    setVolume(response.volumen);
  };
  return (
    <>
      {process === null ? (
        <CircularProgress />
      ) : (
        <CalculateVolumeView
          onSubmit={onSubmit}
          reactionOrder={process.ordenReaccion}
          constanteCinetica={process.constanteCinetica}
        />
      )}
      {volume !== null && <VolumeResults volume={volume} />}
    </>
  );
};
