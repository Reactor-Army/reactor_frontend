import React from "react";
import {TextField as MuiTextField} from "@material-ui/core";
import {Field} from "formik";

export const FormTextField = ({placeholder}) => {
  return <Field label={placeholder} component={TextField} />;
};

const TextField = ({label, ...props}) => {
  return <MuiTextField label={label} variant="outlined" {...props} />;
};
