import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createSearchAdsorbatesThunk} from "../../../redux/adsorbatesSlice";
import {AdsorbateSearch} from "../../../components/Search/AdsorbateSearch";

export function AdsorbateSearchContainer() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [charge, setCharge] = useState("");
  const handleChargeChange = (event) => {
    setCharge(parseInt(event.target.value));
  };

  const dispatch = useDispatch();
  const onSearchSubmit = async () => {
    dispatch(createSearchAdsorbatesThunk(name, charge)());
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
