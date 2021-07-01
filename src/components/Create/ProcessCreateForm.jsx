import React from "react";
//import {CreateForm} from "./CreateForm";
import {createProcess} from "../../services/processes";
//import {processFields} from "./fields";
//import {URLS} from "../../routing/urls";
import {Form} from "../Form/Form";
//import {TextField} from "../Form/Fields/TextField";

export const ProcessCreateForm = () => {
  const onSubmit = async (values) => {
    try {
      return await createProcess(values);
    } catch (e) {
      return e.response.data;
    }
  };

  //const fields = [{component: <TextField placeholder="aaaaaaaaa" />}];

  return <Form onSubmit={onSubmit} title="Test" />;
};
