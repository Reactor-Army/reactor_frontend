import React from "react";
import {CreateForm} from "./CreateForm";
import {createAdsorbate} from "../../services/adsorbates";
import {adsorbateFields} from "./fields";
import {URLS} from "../../routing/urls";

export const AdsorbateCreateForm = () => {
  const onClick = async (values) => {
    try {
      return await createAdsorbate(values);
    } catch (e) {
      return e.response.data;
    }
  };

  return (
    <CreateForm
      onFormSubmit={onClick}
      items={adsorbateFields}
      url={URLS.ADSORBATES_LIST}
      buttonLabel={"Agregar"}
    />
  );
};
