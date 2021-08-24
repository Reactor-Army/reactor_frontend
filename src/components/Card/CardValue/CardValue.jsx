import React from "react";
import {FieldValue} from "../CommonCardStyles";

export const CardValue = ({value, units = ""}) => {
  return <FieldValue>{value !== null ? `${value} ${units}` : "-"}</FieldValue>;
};
