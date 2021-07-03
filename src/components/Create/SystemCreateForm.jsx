import React from "react";
//import {CreateForm} from "./CreateForm";
import {createSystem} from "../../services/processes";
//import {processFields} from "./fields";
//import {URLS} from "../../routing/urls";
import {Form} from "../Form/Form";
import {FormTextField} from "../Form/Fields/FormTextField";

export const SystemCreateForm = () => {
  const onSubmit = async (values) => {
    try {
      return await createSystem(values);
    } catch (e) {
      return e.response.data;
    }
  };

  //const fields = [{component: <TextField placeholder="aaaaaaaaa" />}];

  return (
    <Form
      onSubmit={onSubmit}
      title="Agregar Sistema"
      fields={[
        <FormTextField placeholder="Test" key={1} />,
        <FormTextField placeholder="Test" key={2} />,
      ]}
    />
  );
};
