import React, {useEffect, useState} from "react";
import {CalculateVolumeView} from "../components/CalculateVolumeView/CalculateVolumeView";
import {useDispatch} from "react-redux";
import {calculateVolume} from "../services/calculateVolume";
import {fetchAdsorbatesWithIupacNotation} from "../redux/adsorbatesSlice";
import {fetchAdsorbentsWithParticleSize} from "../redux/adsorbentsSlice";
import {getProcess} from "../services/processes";

export const CalculateVolumeViewContainer = () => {
  const dispatch = useDispatch();
  const [processId, setProcessId] = useState(null);
  const [process, setProcess] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(fetchAdsorbatesWithIupacNotation());
    dispatch(fetchAdsorbentsWithParticleSize());
  }, []);

  const changeProcess = async (id) => {
    setProcessId(id);
    setProcess(null);
    if (id === null) {
      return;
    }
    setLoading(true);
    const process = await getProcess(id);
    setProcess(process);
    setLoading(false);
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

  const reset = () => {
    setVolume(null);
  };

  return (
    <>
      <CalculateVolumeView
        onSubmit={onSubmit}
        process={process}
        setProcess={changeProcess}
        loading={loading}
        volumeResult={volume}
        onResetClick={reset}
      />
    </>
  );
};
