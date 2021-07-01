import React from "react";
//import {CreateForm} from "./CreateForm";
import {createProcess} from "../../services/processes";
//import {processFields} from "./fields";
//import {URLS} from "../../routing/urls";
import {Form} from "../Form/Form";

export const ProcessCreateForm = () => {
  const onSubmit = async (values) => {
    try {
      return await createProcess(values);
    } catch (e) {
      return e.response.data;
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      title="Test"
      fields={[<div key={1}>Buenas</div>, <div key={2}>Buenas</div>]}
    />
  );
};
