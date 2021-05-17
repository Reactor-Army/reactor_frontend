import React from "react";
import {Search} from "./Search";
import {Entity} from "./Fields/Entity";
import {SearchContainer} from "./Styles";

export function IdealAdsorbentSearch({
  adsorbate,
  handleAdsorbateChange,
  onSearchSubmit,
  adsorbateItems,
}) {
  console.log(adsorbate);
  return (
    <SearchContainer>
      <Search onSearchSubmit={onSearchSubmit}>
        <Entity
          name={adsorbate}
          handleChange={handleAdsorbateChange}
          formTitle={"Adsorbatos"}
          items={adsorbateItems}
        />
      </Search>
    </SearchContainer>
  );
}
