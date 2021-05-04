import {AdsorbateSearch} from "../components/Search/AdsorbateSearch";
import React, {useState} from "react";
import {searchAdsorbates} from "../services/adsorbates";

export function AdsorbateSearchContainer() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [charge, setCharge] = useState("");
  const handleChargeChange = (event) => {
    setCharge(parseInt(event.target.value));
  };

  const onSearchSubmit = () => {
    searchAdsorbates(name, charge);
  };

  return (
    <AdsorbateSearch
      name={name}
      charge={charge}
      handleNameChange={handleNameChange}
      handleChargeChange={handleChargeChange}
      onSearchSubmit={onSearchSubmit}
    />
  );
}
