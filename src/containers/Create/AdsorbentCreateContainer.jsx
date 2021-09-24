import React, {useState} from "react";
import {AdsorbentForm} from "../../components/Create/AdsorbentForm";
import {URLS} from "../../routing/urls";
import {createAdsorbent} from "../../services/adsorbents";
import {ADSORBENT_FORM_INITIAL_VALUES} from "../../common/constants";
import {useHistory} from "react-router-dom";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";

export const AdsorbentCreateContainer = () => {
  const history = useHistory();
  const [errors, setErrors] = useState(true);
  const onSubmit = async (values) => {
    if (!errors) {
      try {
        await createAdsorbent(values);
        displayUpdateMessage();
        history.push(URLS.ADSORBENTS_LIST);
      } catch (error) {
        return error.response.data;
      }
    }
  };
  return (
    <AdsorbentForm
      title={"Agregar adsorbente"}
      onSubmit={onSubmit}
      buttonLabel={"Agregar"}
      setErrors={setErrors}
      initialValues={ADSORBENT_FORM_INITIAL_VALUES}
    />
  );
};
