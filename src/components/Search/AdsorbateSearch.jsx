import React from "react";
import {Search} from "./Search";
import {Name} from "./Fields/Name";
import {IonicCharge} from "./Fields/IonicCharge";

export function AdsorbateSearch({
  name,
  handleNameChange,
  charge,
  handleChargeChange,
  onSearchSubmit,
}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Name name={name} handleNameChange={handleNameChange} />
      <IonicCharge charge={charge} handleChargeChange={handleChargeChange} />
    </Search>
  );
}
