import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdsorbent} from "../../redux/adsorbentSlice";
import {editAdsorbent} from "../../services/adsorbents";
import {URLS} from "../../routing/urls";
import {useHistory} from "react-router-dom";
import {AdsorbentForm} from "./AdsorbentForm";
import {Redirect} from "react-router-dom";
import {errorCodes} from "../../utils/errorStatusCodes";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";

export const AdsorbentEditForm = ({id}) => {
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const adsorbent = useSelector((store) => store.adsorbent.adsorbent);
  useEffect(() => {
    if (!adsorbent) {
      dispatch(fetchAdsorbent(id));
    }
  }, []);

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        const result = await editAdsorbent(id, {...values, id: parseInt(id)});
        if (result.status) {
          setSubmitError(result.response);
        } else {
          displayUpdateMessage();
          history.push(URLS.ADSORBENTS_LIST);
        }
      } catch (error) {
        return error;
      }
    }
  };

  if (adsorbent && errorCodes.includes(adsorbent.status)) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return (
    <>
      <FormErrorModal
        errorInfo={submitError && submitError.message}
        onClose={() => setSubmitError(null)}
      />
      <AdsorbentForm
        title={"Modificar adsorbente"}
        onSubmit={onSubmit}
        buttonLabel={"Actualizar"}
        setErrors={setErrors}
        initialValues={adsorbent}
      />
    </>
  );
};
