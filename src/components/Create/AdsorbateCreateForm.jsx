import React from "react";
import {CreateForm} from "./CreateForm";
import {createAdsorbate} from "../../services/adsorbates";

export const AdsorbateCreateForm = () => {
  const items = [
    {
      key: "nombreIon",
      label: "Nombre del ion",
      required: true,
    },
    {
      key: "nombreIUPAC",
      label: "Nombre IUPAC",
      required: true,
    },
    {
      key: "cargaIon",
      label: "Carga iónica",
      type: "number",
      processValue: (v) => {
        return v.replace(".", "");
      },
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
    try {
      return await createAdsorbate(values);
    } catch (e) {
      return e.response.data;
    }
  };

  return <CreateForm onFormSubmit={onClick} items={items} />;
};
