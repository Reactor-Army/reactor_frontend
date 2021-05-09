import React from "react";
import {Search} from "./Search";
import {Name} from "./Fields/Name";

export function AdsorbentSearch({name, handleNameChange, onSearchSubmit}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Name name={name} handleNameChange={handleNameChange} />
    </Search>
  );
}
