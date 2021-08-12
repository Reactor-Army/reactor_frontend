import React, {useState} from "react";
import {AdsorbateForm} from "../../components/Create/AdsorbateForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {createAdsorbate} from "../../services/adsorbates";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const AdsorbateCreateRoute = () => {
  const [errors, setErrors] = useState(true);
  const history = useHistory();

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        await createAdsorbate(values);
        history.push(URLS.ADSORBATES_LIST);
      } catch (e) {
        return e.response.data;
      }
    }
  };
  return (
    <CommonPage>
      <AdsorbateForm
        title="Agregar Adsorbato"
        buttonLabel="Agregar"
        onSubmit={onSubmit}
        setErrors={setErrors}
      />
    </CommonPage>
  );
};
