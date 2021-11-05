import React, {useEffect, useState} from "react";
import {ProcessSearch} from "../../../components/Search/ProcessSearch";
import {useSelector} from "react-redux";
import {idFromName, nameFromId} from "../../../utils/idFromName";
import {searchProcesses} from "../../../services/processes";

export function ProcessSearchContainer({
  selectedAdsorbateId,
  selectedAdsorbentId,
  setProcesses,
}) {
  const [adsorbent, setAdsorbent] = useState("");
  const handleAdsorbentChange = (event) => {
    setAdsorbent(event.target.innerText);
  };
  const [adsorbate, setAdsorbate] = useState("");
  const handleAdsorbateChange = (event) => {
    setAdsorbate(event.target.innerText);
  };

  const adsorbentsWithParticleSize = useSelector(
    (state) => state.adsorbents.adsorbentsWithParticleSize,
  );
  const adsorbatesWithIupacNotation = useSelector(
    (state) => state.adsorbates.adsorbatesWithIupacNotation,
  );

  const adsorbentsSearchArray = adsorbentsWithParticleSize.map((adsorbent) => {
    return adsorbent.nombre;
  });

  const adsorbatesSearchArray = adsorbatesWithIupacNotation.map((adsorbate) => {
    return adsorbate.nombre;
  });

  useEffect(() => {
    if (selectedAdsorbateId) {
      let adsorbateName = nameFromId(
        selectedAdsorbateId,
        adsorbatesWithIupacNotation,
        "nombre",
      );
      setAdsorbate(adsorbateName);
    }
  }, [adsorbatesWithIupacNotation]);
  useEffect(() => {
    if (selectedAdsorbentId) {
      let adsorbentName = nameFromId(
        selectedAdsorbentId,
        adsorbentsWithParticleSize,
        "nombre",
      );
      setAdsorbent(adsorbentName);
    }
  }, [adsorbentsWithParticleSize]);

  const onSearchSubmit = async () => {
    let adsorbateId = idFromName(
      adsorbate,
      adsorbatesWithIupacNotation,
      "nombre",
    );
    if (adsorbate && adsorbateId === null) {
      adsorbateId = -1;
    }
    let adsorbentId = idFromName(
      adsorbent,
      adsorbentsWithParticleSize,
      "nombre",
    );
    if (adsorbent && adsorbentId === null) {
      adsorbentId = -1;
    }
    const response = await searchProcesses(adsorbateId, adsorbentId);
    if (!response.status) {
      setProcesses(response);
    }
  };

  return (
    <ProcessSearch
      adsorbate={adsorbate}
      adsorbent={adsorbent}
      handleAdsorbateChange={handleAdsorbateChange}
      handleAdsorbentChange={handleAdsorbentChange}
      onSearchSubmit={onSearchSubmit}
      adsorbentItems={adsorbentsSearchArray}
      adsorbateItems={adsorbatesSearchArray}
    />
  );
}
