import React from "react";
import {CreateForm} from "./CreateForm";
import {createProcess} from "../../services/processes";
import {processFields} from "./fields";
import {URLS} from "../../routing/urls";

export const ProcessCreateForm = () => {
  const onClick = async (values) => {
    try {
      return await createProcess(values);
    } catch (e) {
      return e.response.data;
    }
  };

  return (
    <CreateForm
      onFormSubmit={onClick}
      items={processFields}
      url={URLS.PROCESSES_LIST}
      buttonLabel={"Agregar"}
    />
  );
};
