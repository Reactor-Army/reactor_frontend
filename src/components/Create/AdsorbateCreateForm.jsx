import React from "react";
import {CreateForm} from "./CreateForm";
import {createAdsorbate} from "../../services/adsorbates";
import {adsorbateFields} from "./fields";

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
      url={URL.ADSORBATES_LIST}
      buttonLabel={"Agregar"}
    />
  );
};
