import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const Entity = ({formTitle, name, handleChange, items}) => {
  const test = items.map((item) => {
    return {title: item};
  });
  return (
    <Grid item xs={3}>
      <Autocomplete
        freeSolo
        id="combo-box-demo"
        options={test}
        getOptionLabel={(option) => option.title}
        style={{width: 270}}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            label={formTitle}
            variant="outlined"
            value={name}
            onChange={handleChange}
          />
        )}
      />
    </Grid>
  );
};
