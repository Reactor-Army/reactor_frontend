import React, {useEffect, useState} from "react";
import {CalculateVolumeView} from "../components/CalculateVolumeView/CalculateVolumeView";
import {useDispatch} from "react-redux";
import {calculateVolume} from "../services/calculateVolume";
import {VolumeResults} from "../components/CalculateVolumeView/VolumeResults";
import {fetchAdsorbatesWithIupacNotation} from "../redux/adsorbatesSlice";
import {fetchAdsorbentsWithParticleSize} from "../redux/adsorbentsSlice";
import {getProcess} from "../services/processes";

export const CalculateVolumeViewContainer = () => {
  const dispatch = useDispatch();
  const [processId, setProcessId] = useState(null);
  const [process, setProcess] = useState(null);
  useEffect(() => {
    dispatch(fetchAdsorbatesWithIupacNotation());
    dispatch(fetchAdsorbentsWithParticleSize());
  }, []);

  const changeProcess = async (id) => {
    setProcessId(id);
    if (id === null) {
      setProcess(null);
      return;
    }

    const process = await getProcess(id);
    setProcess(process);
  };
  const [volume, setVolume] = useState(null);
  const onSubmit = async (values) => {
    const body = {
      ...values,
    };
    body.concentracionInicial /= 1000;
    body.concentracionFinal /= 1000;
    const response = await calculateVolume(processId, body);
    setVolume(response.volumen);
  };
  return (
    <>
      <CalculateVolumeView
        onSubmit={onSubmit}
        process={process}
        setProcess={changeProcess}
      />
      {volume !== null && <VolumeResults volume={volume} />}
    </>
  );
};
