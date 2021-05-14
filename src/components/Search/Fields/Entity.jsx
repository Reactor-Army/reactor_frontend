import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const Entity = ({formTitle, name, handleChange, items}) => {
  const inputItems = items.map((item) => {
    return {name: item};
  });
  return (
    <Grid item xs={3}>
      <Autocomplete
        options={inputItems}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option.name === value.name}
        style={{width: 270}}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            label={formTitle}
            variant="outlined"
            value={name}
          />
        )}
      />
    </Grid>
  );
};
