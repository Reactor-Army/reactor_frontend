import React from "react";
import {Search} from "./Search";
import {Name} from "./Fields/Name";
import {IonicCharge} from "./Fields/IonicCharge";
import {SearchButton} from "./SearchButton";

export function AdsorbateSearch({
  name,
  handleNameChange,
  charge,
  handleChargeChange,
  onSearchSubmit,
}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Name
        name={name}
        handleNameChange={handleNameChange}
        onKeyPress={onSearchSubmit}
      />
      <IonicCharge
        charge={charge}
        handleChargeChange={handleChargeChange}
        onKeyPress={onSearchSubmit}
      />
      <SearchButton onClick={onSearchSubmit} />
    </Search>
  );
}
