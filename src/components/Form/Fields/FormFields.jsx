import React, {useState} from "react";
import {TextField as MuiTextField} from "@material-ui/core";
import {Field} from "formik";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {RadioGroup} from "../../RadioGroup/RadioGroup";
import {useEffect} from "react";

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

  useEffect(() => {
    if (field.value) {
      setSelectedValue(field.value);
    }
  }, [field.value]);

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
  field,
  ...props
}) => {
  /*const selectedItem = value
    ? items.find((item) => item.value === value)
    : null;*/
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (field.value) {
      setSelectedItem(items.find((item) => item.value === field.value));
    }
  }, [field.value]);

  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        if (newValue) {
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
