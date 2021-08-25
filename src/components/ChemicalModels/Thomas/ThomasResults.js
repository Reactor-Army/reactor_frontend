import React from "react";
import {Typography} from "@material-ui/core";

export const ThomasResults = ({kth, q0}) => {
  return (
    <>
      <Typography>Constante de Thomas (Kth): {kth}</Typography>
      <Typography>Concentración máxima soluto (q0): {q0}</Typography>
    </>
  );
};
