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

export const FormNumericField = ({placeholder, name}) => {
  return (
    <Field
      type="number"
      label={placeholder}
      component={TextField}
      name={name}
    />
  );
};

export const FormSelectorField = ({placeholder, handleChange, items, name}) => {
  return (
    <Field
      name={name}
      handleChange={handleChange}
      formTitle={placeholder}
      items={items}
      component={SelectorField}
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

const SelectorField = ({...props}) => {
  const inputItems = props.items.map((item) => {
    return {name: item};
  });
  return (
    <Autocomplete
      clearOnBlur={true}
      options={inputItems}
      getOptionSelected={(option, value) => {
        option.name === value;
      }}
      freeSolo
      value={props.name || null}
      getOptionLabel={(option) => option.name || option}
      onChange={props.handleChange}
      renderInput={(params) => (
        <MuiTextField
          {...params}
          id="outlined-basic"
          label={props.formTitle}
          variant="outlined"
        />
      )}
    />
  );
};
