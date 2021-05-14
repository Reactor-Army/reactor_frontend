import React from "react";
import {SubIndex} from "./Styles";

export const FormulaComponent = ({component}) => {
  if (isNaN(component)) {
    return <div>{component}</div>;
  } else {
    return <SubIndex>{component}</SubIndex>;
  }
};
