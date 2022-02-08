import React, {useState} from "react";
import {AdsorbentForm} from "../../components/CustomForms/AdsorbentForm";
import {URLS} from "../urls";
import {createAdsorbent} from "../../services/adsorbents";
import {ADSORBENT_FORM_INITIAL_VALUES} from "../../common/constants";
import {useHistory} from "react-router-dom";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";

export const AdsorbentCreateRoute = () => {
  const history = useHistory();
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const onSubmit = async (values) => {
    if (!errors) {
      try {
        const result = await createAdsorbent(values);
        if (result.status) {
          setSubmitError(result.response);
        } else {
          displayUpdateMessage();
          history.push(URLS.ADSORBENTS_LIST);
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
      <AdsorbentForm
        title={"Agregar adsorbente"}
        onSubmit={onSubmit}
        buttonLabel={"Agregar"}
        setErrors={setErrors}
        initialValues={ADSORBENT_FORM_INITIAL_VALUES}
      />
    </>
  );
};
