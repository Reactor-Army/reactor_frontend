import React from "react";
import {Search} from "./Search";
import {Entity} from "./Fields/Entity";
import {SearchContainer} from "./Styles";

export function ProcessSearch({
  adsorbate,
  handleAdsorbateChange,
  adsorbent,
  handleAdsorbentChange,
  onSearchSubmit,
  adsorbents,
  adsorbates,
}) {
  return (
    <SearchContainer>
      <Search onSearchSubmit={onSearchSubmit}>
        <Entity
          name={adsorbate}
          handleChange={handleAdsorbateChange}
          formTitle={"Adsorbato"}
          items={adsorbates}
        />
        <Entity
          name={adsorbent}
          handleChange={handleAdsorbentChange}
          formTitle={"Adsorbente"}
          items={adsorbents}
        />
      </Search>
    </SearchContainer>
  );
}
