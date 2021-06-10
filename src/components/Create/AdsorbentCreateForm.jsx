import React from "react";
import {CreateForm} from "./CreateForm";
import {createAdsorbate} from "../../services/adsorbates";
import {processNotNegative, removePeriods} from "./validations";

export const AdsorbentCreateForm = () => {
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
      processValue: removePeriods,
    },
    {
      key: "radioIonico",
      label: "Radio iónico",
      type: "number",
      // Another example: call setError whenever we find a problem
      processValue: processNotNegative,
    },
    {
      key: "limiteVertido",
      label: "Límite de vertido",
      type: "number",
      processValue: processNotNegative,
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
