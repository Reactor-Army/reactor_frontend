import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {ProcessCreateForm} from "../../components/Create/ProcessCreateForm";

export const ProcessCreateRoute = () => {
  return (
    <>
      <PageTitle title={"Agregar proceso"} />
      <ProcessCreateForm />
    </>
  );
};
