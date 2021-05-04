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

  const onSearchSubmit = async () => {
    const response = await searchAdsorbates(name, charge);
    console.log(response);
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
