import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createSearchAdsorbentsThunk} from "../../../redux/adsorbentsSlice";
import {AdsorbentSearch} from "../../../components/Search/AdsorbentSearch";
import {ENTER_KEY} from "../../../common/constants";

export function AdsorbentSearchContainer() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const dispatch = useDispatch();
  const onSearchSubmit = async (event) => {
    if (event.key && event.key !== ENTER_KEY) {
      return;
    }
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
