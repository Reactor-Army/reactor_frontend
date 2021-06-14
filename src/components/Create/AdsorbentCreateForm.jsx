import React from "react";
import {CreateForm} from "./CreateForm";
import {createAdsorbent} from "../../services/adsorbents";
import {processNotNegative, phInRange} from "./validations";
import {URLS} from "../../routing/urls";

export const AdsorbentCreateForm = () => {
  const items = [
    {
      key: "nombre",
      label: "Nombre del adsorbente",
      required: true,
    },
    {
      key: "particulaT",
      label: "Tamaño de partícula",
      required: true,
    },
    {
      key: "sBet",
      label: "sBet",
      type: "number",
      processValue: processNotNegative,
    },
    {
      key: "vBet",
      label: "vBet",
      type: "number",
      processValue: processNotNegative,
    },
    {
      key: "pHCargaCero",
      label: "ph (carga cero)",
      type: "number",
      processValue: phInRange,
    },
    {
      key: "formula",
      label: "Fórmula",
    },
    {
      key: "impurezas",
      label: "Impurezas",
    },
    {
      key: "origenMuestra",
      label: "Origen de la muestra",
    },
    {
      key: "nombreEspecie",
      label: "Nombre de la especie",
    },
  ];
  const onClick = async (values) => {
    try {
      return await createAdsorbent(values);
    } catch (e) {
      return e.response.data;
    }
  };

  return (
    <CreateForm
      onFormSubmit={onClick}
      items={items}
      url={URLS.ADSORBENTS_LIST}
    />
  );
};
