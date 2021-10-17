import TextField from "@material-ui/core/TextField";
import React from "react";
import {getTextFieldStyles} from "../SearchbarStyles";
import {useScreenWidth} from "../../../customHooks/useScreenWidth";
import {ADSORBENT_FIELDS} from "../../../common/fields";

export const Name = ({name, handleNameChange, onKeyPress}) => {
  const responsiveWidth = 848;
  const matchesResponsiveWidth = useScreenWidth(responsiveWidth);
  return (
    <TextField
      id="outlined-basic"
      label={ADSORBENT_FIELDS.NAME}
      variant="outlined"
      value={name}
      onChange={handleNameChange}
      onKeyPress={onKeyPress}
      style={getTextFieldStyles(matchesResponsiveWidth)}
    />
  );
};
