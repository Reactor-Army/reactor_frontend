import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchIdealAdsorbents} from "../../../redux/idealAdsorbentsSlice";
import {IdealAdsorbentSearch} from "../../../components/Search/IdealAdsorbentSearch";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export function IdealAdsorbentSearchContainer() {
  const [adsorbate, setAdsorbate] = useState("");
  const handleAdsorbateChange = (event) => {
    setAdsorbate(event.target.innerText);
  };

  const adsorbatesWithIupacNotation = useSelector(
    (state) => state.adsorbates.adsorbatesWithIupacNotation,
  );

  console.log(useSelector((state) => state.idealAdsorbents));

  const adsorbatesSearchArray = adsorbatesWithIupacNotation.map((adsorbate) => {
    return {name: adsorbate.nombre, id: adsorbate.id};
  });

  const dispatch = useDispatch();

  useEffect(() => {}, [adsorbatesWithIupacNotation]);

  const onSearchSubmit = async () => {
    dispatch(
      fetchIdealAdsorbents(
        ids.map((item) => {
          return item.id;
        }),
      ),
    );
  };

  let ids = [];

  return (
    <>
      <Autocomplete
        multiple
        options={adsorbatesSearchArray}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
          ids = value;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      <IdealAdsorbentSearch
        adsorbate={adsorbate}
        handleAdsorbateChange={handleAdsorbateChange}
        onSearchSubmit={onSearchSubmit}
        adsorbateItems={adsorbatesSearchArray}
      />
    </>
  );
}
