import React, {useState} from "react";
import {TextField as MuiTextField} from "@material-ui/core";
import {Field} from "formik";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {RadioGroup} from "../../RadioGroup/RadioGroup";

const booleanValues = [
  {label: "Si", value: true},
  {label: "No", value: false},
];

export const FormTextField = ({placeholder, name}) => {
  return <Field label={placeholder} component={TextField} name={name} />;
};

export const FormNumericField = ({placeholder, name, validateField}) => {
  return (
    <Field
      type="number"
      label={placeholder}
      component={TextField}
      name={name}
      validate={validateField}
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

export const FormSelectorField = ({placeholder, items, name}) => {
  return (
    <Field
      name={name}
      placeholder={placeholder}
      items={items}
      component={SelectorField}
      formComponentName={name}
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
  ...props
}) => {
  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        form.setFieldValue(formComponentName, newValue.value);
      }}
      renderInput={(params) => (
        <MuiTextField {...params} variant="outlined" label={placeholder} />
      )}
      {...props}
    />
  );
};
