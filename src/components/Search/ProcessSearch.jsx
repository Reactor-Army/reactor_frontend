import React from "react";
import {Search} from "./Search";
import {Entity} from "./Fields/Entity";

export function ProcessSearch({
  adsorbate,
  handleAdsorbateChange,
  adsorbent,
  handleAdsorbentChange,
  onSearchSubmit,
}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Entity
        name={adsorbate}
        handleChange={handleAdsorbateChange}
        formTitle={"Adsorbato"}
      />
      <Entity
        entity={adsorbent}
        handleChange={handleAdsorbentChange}
        formTitle={"Adsorbente"}
      />
    </Search>
  );
}
