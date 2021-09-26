import React, {useState} from "react";
import {AdsorbateForm} from "../../components/Create/AdsorbateForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {createAdsorbate} from "../../services/adsorbates";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";

export const AdsorbateCreateRoute = () => {
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        const result = await createAdsorbate(values);
        if (result.status) {
          setSubmitError(result.response);
        } else {
          history.push(URLS.ADSORBATES_LIST);
          displayUpdateMessage();
        }
      } catch (error) {
        return error.response.data;
      }
    }
  };

  return (
    <>
      <FormErrorModal
        errorInfo={submitError && submitError.message}
        onClose={() => setSubmitError(null)}
      />
      <AdsorbateForm
        title="Agregar Adsorbato"
        buttonLabel="Agregar"
        onSubmit={onSubmit}
        setErrors={setErrors}
      />
    </>
  );
};
