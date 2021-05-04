import {AdsorbateSearch} from "../components/Search/AdsorbateSearch";
import React, {useState} from "react";

export function AdsorbateSearchContainer() {
  const [name, setName] = useState(null);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [charge, setCharge] = useState(null);
  const handleChargeChange = (event) => {
    setCharge(parseInt(event.target.value));
  };
  return (
    <AdsorbateSearch
      name={name}
      charge={charge}
      handleNameChange={handleNameChange}
      handleChargeChange={handleChargeChange}
    />
  );
}
