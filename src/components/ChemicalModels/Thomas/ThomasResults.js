import React from "react";
import {Typography} from "@material-ui/core";
import {MODEL_UNITS} from "../../../common/fields";

export const ThomasResults = ({kth, q0}) => {
  return (
    <>
      <Typography>
        Constante de Thomas (Kth): {kth} ({MODEL_UNITS.KTH})
      </Typography>
      <Typography>
        Concentración máxima soluto (q0): {q0} ({MODEL_UNITS.Q0})
      </Typography>
    </>
  );
};
