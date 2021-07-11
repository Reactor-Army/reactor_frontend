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

export const FormBooleanField = ({title, name, value}) => {
  return (
    <Field
      options={booleanValues}
      title={title}
      component={BooleanRadioGroup}
      name={name}
      formComponentName={name}
      value={value}
    />
  );
};

export const FormSelectorField = ({
  placeholder,
  items,
  name,
  error,
  value,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  return (
    <Field
      name={name}
      placeholder={placeholder}
      items={items}
      component={SelectorField}
      formComponentName={name}
      value={selectedValue}
      error={error ? true : false}
      helperText={error && error}
      setSelectedValue={setSelectedValue}
      {...props}
    />
  );
};

const TextField = ({field, ...props}) => {
  return <MuiTextField variant="outlined" {...field} {...props} />;
};

const BooleanRadioGroup = ({
  formComponentName,
  form,
  field,
  value,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
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
  value,
  setSelectedValue,
  ...props
}) => {
  const selectedItem = value
    ? items.find((item) => item.value === value)
    : null;
  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        if (newValue) {
          setSelectedValue(newValue.value);
          form.setFieldValue(formComponentName, newValue.value);
        } else {
          form.setFieldValue(formComponentName, null);
        }
      }}
      value={selectedItem}
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
