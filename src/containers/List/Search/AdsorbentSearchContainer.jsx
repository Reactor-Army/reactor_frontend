import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AdsorbentSearch} from "../../../components/Search/AdsorbentSearch";
import {createSearchAdsorbentsThunk} from "../../../redux/adsorbentsSlice";

export function AdsorbentSearchContainer() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const dispatch = useDispatch();
  const onSearchSubmit = async () => {
    dispatch(createSearchAdsorbentsThunk(name)());
  };

  return (
    <AdsorbentSearch
      name={name}
      handleNameChange={handleNameChange}
      onSearchSubmit={onSearchSubmit}
    />
  );
}
