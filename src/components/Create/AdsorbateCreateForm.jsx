import React from "react";
import {CreateForm} from "./CreateForm";

export const AdsorbateCreateForm = () => {
  const items = [
    {
      label: "Nombre IUPAC",
      required: true,
    },
    {
      label: "Nombre del ion",
    },
    {
      label: "Carga iónica",
      type: "number",
    },
  ];

  return <CreateForm items={items} />;
};
