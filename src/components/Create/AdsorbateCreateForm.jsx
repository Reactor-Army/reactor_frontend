import React from "react";
import {CreateForm} from "./CreateForm";

export const AdsorbateCreateForm = () => {
  const items = [
    {
      key: "nombreIupac",
      label: "Nombre IUPAC",
      required: true,
    },
    {
      key: "nombreIon",
      label: "Nombre del ion",
    },
    {
      key: "cargaIon",
      label: "Carga iónica",
      type: "number",
    },
    {
      key: "radioIonico",
      label: "Radio iónico",
      type: "number",
    },
    {
      key: "limiteVertido",
      label: "Límite de vertido",
      type: "number",
    },
    {
      key: "formula",
      label: "Fórmula",
    },
  ];
  const onClick = (values) => {
    console.log(values);
  };

  return <CreateForm onFormSubmit={onClick} items={items} />;
};
