import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {getTextFieldStyles} from "../Styles";
import {useScreenWidth} from "../../../customHooks/useScreenWidth";
import {ADSORBENT_FIELDS} from "../../../common/text";

export const Name = ({name, handleNameChange, onKeyPress}) => {
  const responsiveWidth = 848;
  const matchesResponsiveWidth = useScreenWidth(responsiveWidth);
  return (
    <Grid item>
      <TextField
        id="outlined-basic"
        label={ADSORBENT_FIELDS.NAME}
        variant="outlined"
        value={name}
        onChange={handleNameChange}
        onKeyPress={onKeyPress}
        style={getTextFieldStyles(matchesResponsiveWidth)}
      />
    </Grid>
  );
};
