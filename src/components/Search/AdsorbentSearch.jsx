import React from "react";
import {Search} from "./Search";
import {Name} from "./Fields/Name";
import {SearchButton} from "./SearchButton";

export function AdsorbentSearch({name, handleNameChange, onSearchSubmit}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Name
        name={name}
        handleNameChange={handleNameChange}
        onKeyPress={onSearchSubmit}
      />
      <SearchButton onClick={onSearchSubmit} />
    </Search>
  );
}
