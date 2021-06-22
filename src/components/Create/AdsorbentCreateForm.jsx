import React from "react";
import {CreateForm} from "./CreateForm";
import {createAdsorbent} from "../../services/adsorbents";
import {adsorbentFields} from "./fields";
import {URLS} from "../../routing/urls";

export const AdsorbentCreateForm = () => {
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
      items={adsorbentFields}
      url={URLS.ADSORBENTS_LIST}
      buttonLabel={"Agregar"}
    />
  );
};
