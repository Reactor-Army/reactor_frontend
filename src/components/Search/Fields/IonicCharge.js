import TextField from "@material-ui/core/TextField";
import React from "react";
import {getTextFieldStyles} from "../SearchbarStyles";
import {useScreenWidth} from "../../../customHooks/useScreenWidth";
import {ADSORBATE_FIELDS} from "../../../common/fields";

export const IonicCharge = ({charge, handleChargeChange, onKeyPress}) => {
  const responsiveWidth = 848;
  const matchesResponsiveWidth = useScreenWidth(responsiveWidth);
  return (
    <TextField
      id="outlined-basic"
      label={ADSORBATE_FIELDS.ION_CHARGE}
      type="number"
      variant="outlined"
      value={charge}
      onChange={handleChargeChange}
      onKeyPress={onKeyPress}
      style={getTextFieldStyles(matchesResponsiveWidth)}
    />
  );
};
