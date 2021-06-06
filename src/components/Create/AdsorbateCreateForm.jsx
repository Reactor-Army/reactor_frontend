import React from "react";
import {CreateForm} from "./CreateForm";
import {createAdsorbate} from "../../services/adsorbates";

export const AdsorbateCreateForm = () => {
  const items = [
    {
      key: "nombreIUPAC",
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
  const onClick = async (values) => {
    const response = await createAdsorbate(values);
    console.log(response);
  };

  return <CreateForm onFormSubmit={onClick} items={items} />;
};
