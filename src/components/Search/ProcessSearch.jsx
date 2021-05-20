import React from "react";
import {Search} from "./Search";
import {Entity} from "./Fields/Entity";
//import {SearchContainer} from "./Styles";
import {SearchButton} from "./SearchButton";

export function ProcessSearch({
  adsorbate,
  handleAdsorbateChange,
  adsorbent,
  handleAdsorbentChange,
  onSearchSubmit,
  adsorbentItems,
  adsorbateItems,
}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Entity
        name={adsorbate}
        handleChange={handleAdsorbateChange}
        formTitle={"Adsorbato"}
        items={adsorbateItems}
      />
      <Entity
        name={adsorbent}
        handleChange={handleAdsorbentChange}
        formTitle={"Adsorbente"}
        items={adsorbentItems}
      />
      <SearchButton onClick={onSearchSubmit} />
    </Search>
  );
}
