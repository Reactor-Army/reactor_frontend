import React, {useState} from "react";
import {ProcessSearch} from "../../../components/Search/ProcessSearch";
import {useSelector} from "react-redux";
import {idFromName} from "../../../utils/idFromName";

export function ProcessSearchContainer() {
  const [adsorbent, setAdsorbent] = useState("");
  const handleAdsorbentChange = (event) => {
    setAdsorbent(event.target.value);
  };
  const [adsorbate, setAdsorbate] = useState("");
  const handleAdsorbateChange = (event) => {
    setAdsorbate(event.target.value);
  };

  const adsorbents = useSelector((state) => state.adsorbents.adsorbents);
  const adsorbates = useSelector((state) => state.adsorbates.adsorbates);
  const onSearchSubmit = async () => {
    const adsorbentId = idFromName(adsorbent, adsorbents, "nombre");
    const adsorbateId = idFromName(adsorbate, adsorbates, "nombreIon");
    console.log(adsorbentId, adsorbateId);
  };

  return (
    <ProcessSearch
      adsorbate={adsorbate}
      adsorbent={adsorbent}
      handleAdsorbateChange={handleAdsorbateChange}
      handleAdsorbentChange={handleAdsorbentChange}
      onSearchSubmit={onSearchSubmit}
    />
  );
}
