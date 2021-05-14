import React from "react";
import {SubIndex, ComponentDiv} from "./Styles";

export const FormulaComponent = ({component}) => {
  if (isNaN(component)) {
    return <ComponentDiv>{component}</ComponentDiv>;
  } else {
    return <SubIndex>{component}</SubIndex>;
  }
};
