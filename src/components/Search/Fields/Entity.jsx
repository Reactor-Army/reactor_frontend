import TextField from "@material-ui/core/TextField";
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {getAutoCompleteFieldStyles} from "../SearchbarStyles";
import {useScreenWidth} from "../../../customHooks/useScreenWidth";

export const Entity = ({formTitle, name, handleChange, items}) => {
  const inputItems = items.map((item) => {
    return {name: item};
  });
  const responsiveWidth = 925;
  const matchesResponsiveWidth = useScreenWidth(responsiveWidth);
  return (
    <Autocomplete
      clearOnBlur={true}
      options={inputItems}
      getOptionSelected={(option, value) => {
        return option.name === value;
      }}
      disabled={items.length === 0}
      freeSolo
      value={name || null}
      getOptionLabel={(option) => option.name || option}
      onChange={handleChange}
      style={getAutoCompleteFieldStyles(matchesResponsiveWidth)}
      renderInput={(params) => (
        <TextField
          {...params}
          id="outlined-basic"
          label={formTitle}
          variant="outlined"
        />
      )}
    />
  );
};
