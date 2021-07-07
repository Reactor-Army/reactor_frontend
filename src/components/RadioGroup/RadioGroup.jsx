import React from "react";
import Radio from "@material-ui/core/Radio";
import {RadioGroup as MuiRadioGroup} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const RadioGroup = ({title, options, handleChange, selectedValue}) => {
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <MuiRadioGroup
        value={selectedValue.toString()}
        onChange={handleChange}
        row>
        {options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option.value.toString()}
              control={<Radio color="primary" />}
              label={option.label}
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
};
