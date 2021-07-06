import React, {useState} from "react";
import {TextField as MuiTextField} from "@material-ui/core";
import {Field} from "formik";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {RadioGroup} from "../../RadioGroup/RadioGroup";

const booleanValues = [
  {label: "Si", value: true},
  {label: "No", value: false},
];

export const FormTextField = ({placeholder, name, error, ...props}) => {
  return (
    <Field
      label={placeholder}
      component={TextField}
      name={name}
      error={error ? true : false}
      helperText={error && error}
      {...props}
    />
  );
};

export const FormNumericField = ({placeholder, name, error, ...props}) => {
  return (
    <Field
      type="number"
      label={placeholder}
      component={TextField}
      name={name}
      error={error ? true : false}
      helperText={error && error}
      {...props}
    />
  );
};

export const FormBooleanField = ({title, name}) => {
  return (
    <Field
      options={booleanValues}
      title={title}
      component={BooleanRadioGroup}
      name={name}
      formComponentName={name}
    />
  );
};

export const FormSelectorField = ({
  placeholder,
  items,
  name,
  error,
  ...props
}) => {
  return (
    <Field
      name={name}
      placeholder={placeholder}
      items={items}
      component={SelectorField}
      formComponentName={name}
      error={error ? true : false}
      helperText={error && error}
      {...props}
    />
  );
};

const TextField = ({field, ...props}) => {
  return <MuiTextField variant="outlined" {...field} {...props} />;
};

const BooleanRadioGroup = ({formComponentName, form, field, ...props}) => {
  const [selectedValue, setSelectedValue] = useState(false);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    form.setFieldValue(formComponentName, event.target.value);
  };
  return (
    <RadioGroup
      selectedValue={selectedValue}
      handleChange={handleChange}
      {...field}
      {...props}
    />
  );
};

const SelectorField = ({
  form,
  formComponentName,
  items,
  placeholder,
  error,
  helperText,
  ...props
}) => {
  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        if (newValue) form.setFieldValue(formComponentName, newValue.value);
      }}
      renderInput={(params) => (
        <MuiTextField
          {...params}
          error={error}
          helperText={helperText}
          variant="outlined"
          label={placeholder}
        />
      )}
      {...props}
    />
  );
};
