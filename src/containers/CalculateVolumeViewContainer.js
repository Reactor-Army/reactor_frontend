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
    const body = {
      ...values,
    };
    body.concentracionInicial /= 1000;
    body.concentracionFinal /= 1000;
    const response = await calculateVolume(id, body);
    setVolume(response.volumen);
  };
  return (
    <>
      {!process ? (
        <CircularProgress />
      ) : (
        <CalculateVolumeView onSubmit={onSubmit} process={process} />
      )}
      {volume !== null && <VolumeResults volume={volume} />}
    </>
  );
};
