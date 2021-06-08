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
      // First example: just post-process the value
      processValue: (v) => {
        return v.replace(".", "");
      },
    },
    {
      key: "radioIonico",
      label: "Radio iónico",
      type: "number",
      // Another example: call setError whenever we find a problem
      processValue: (v, setError) => {
        if (v.includes("-")) {
          setError("El radio iónico no puede ser negativo.");
        }
        return v;
      },
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
