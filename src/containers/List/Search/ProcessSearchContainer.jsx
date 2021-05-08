import React, {useState} from "react";
import {ProcessSearch} from "../../../components/Search/ProcessSearch";

export function ProcessSearchContainer() {
  const [adsorbent, setAdsorbent] = useState("");
  const handleAdsorbentChange = (event) => {
    setAdsorbent(event.target.value);
  };
  const [adsorbate, setAdsorbate] = useState("");
  const handleAdsorbateChange = (event) => {
    setAdsorbate(event.target.value);
  };

  const onSearchSubmit = async () => {
    console.log(adsorbate, adsorbent);
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
