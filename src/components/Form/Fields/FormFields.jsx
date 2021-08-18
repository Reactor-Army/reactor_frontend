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
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (field.value !== null && field.value !== undefined) {
      setSelectedItem(items.find((item) => item.value === field.value));
    }
  }, [field.value]);

  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, item) => option.value === item.value}
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

export const FormBigTextField = ({placeholder, name, error, ...props}) => {
  return (
    <Field
      label={placeholder}
      component={BigTextField}
      name={name}
      error={error ? true : false}
      {...props}
    />
  );
};

const CHARACTER_LIMIT = 2000;

const BigTextField = ({field, ...props}) => {
  const [textLength, setTextLength] = useState(0);

  useEffect(() => {
    if (field.value) {
      setTextLength(field.value.length);
    }
  }, [field.value]);

  return (
    <MuiTextField
      variant="outlined"
      multiline
      rows={8}
      inputProps={{
        maxLength: CHARACTER_LIMIT,
      }}
      helperText={`${textLength}/${CHARACTER_LIMIT}`}
      {...field}
      {...props}
    />
  );
};

export const FileField = ({onChange}) => {
  return <input id="file" name="file" type="file" onChange={onChange} />;
};
