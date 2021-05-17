import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {idFromName} from "../../../utils/idFromName";
import {fetchIdealAdsorbents} from "../../../redux/idealAdsorbentsSlice";
import {IdealAdsorbentSearch} from "../../../components/Search/IdealAdsorbentSearch";

export function IdealAdsorbentSearchContainer() {
  const [adsorbate, setAdsorbate] = useState("");
  const handleAdsorbateChange = (event) => {
    setAdsorbate(event.target.innerText);
  };

  const adsorbatesWithIupacNotation = useSelector(
    (state) => state.adsorbates.adsorbatesWithIupacNotation,
  );

  const adsorbatesSearchArray = adsorbatesWithIupacNotation.map((adsorbate) => {
    return adsorbate.nombre;
  });

  const dispatch = useDispatch();

  useEffect(() => {}, [adsorbatesWithIupacNotation]);

  const onSearchSubmit = async () => {
    let adsorbateId = idFromName(
      adsorbate,
      adsorbatesWithIupacNotation,
      "nombre",
    );
    if (adsorbate && adsorbateId === null) {
      adsorbateId = -1;
    }
    dispatch(fetchIdealAdsorbents(adsorbateId));
  };

  return (
    <IdealAdsorbentSearch
      adsorbate={adsorbate}
      handleAdsorbateChange={handleAdsorbateChange}
      onSearchSubmit={onSearchSubmit}
      adsorbateItems={adsorbatesSearchArray}
    />
  );
}
