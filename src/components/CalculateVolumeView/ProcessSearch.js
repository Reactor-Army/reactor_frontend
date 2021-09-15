import {ProcessSearch} from "../Search/ProcessSearch";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getAdsorbentsWithParticleSize} from "../../services/adsorbents";
import {searchProcesses} from "../../services/processes";
import {idFromName} from "../../utils/idFromName";

export const ProcessSearchContainer = ({setProcesses}) => {
  const [adsorbent, setAdsorbent] = useState("");
  const handleAdsorbentChange = async (event) => {
    setAdsorbent(event.target.innerText);
    const adsorbateId = idFromName(
      adsorbate,
      adsorbatesWithIupacNotation,
      "nombre",
    );
    const adsorbentId = idFromName(
      event.target.innerText,
      adsorbentsSearchArray,
      "nombre",
    );
    const process = await searchProcesses(adsorbateId, adsorbentId);
    setProcesses(process);
  };
  const [adsorbate, setAdsorbate] = useState("");
  const adsorbatesWithIupacNotation = useSelector(
    (state) => state.adsorbates.adsorbatesWithIupacNotation,
  );

  const adsorbatesSearchArray = adsorbatesWithIupacNotation.map((adsorbate) => {
    return adsorbate.nombre;
  });

  const [adsorbentsSearchArray, setAdsorbentsSearchArray] = useState([]);

  const handleAdsorbateChange = async (event) => {
    setAdsorbate(event.target.innerText);

    const processesForAdsorbate = await getAdsorbentsWithParticleSize();
    setAdsorbentsSearchArray(processesForAdsorbate);
  };

  const onSearchSubmit = () => {};

  return (
    <ProcessSearch
      adsorbate={adsorbate}
      adsorbent={adsorbent}
      handleAdsorbateChange={handleAdsorbateChange}
      handleAdsorbentChange={handleAdsorbentChange}
      onSearchSubmit={onSearchSubmit}
      adsorbentItems={adsorbentsSearchArray.map((x) => x.nombre)}
      adsorbateItems={adsorbatesSearchArray}
    />
  );
};
