import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {fetchAdsorbate} from "../../redux/adsorbateSlice";
import {editAdsorbate} from "../../services/adsorbates";
import {useDispatch, useSelector} from "react-redux";
import {URLS} from "../urls";
import {AdsorbateForm} from "../../components/CustomForms/AdsorbateForm";
import {Redirect} from "react-router-dom";
import {errorCodes} from "../../utils/errorStatusCodes";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";

export const AdsorbateEditRoute = () => {
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  let {id} = useParams();

  const adsorbate = useSelector((store) => store.adsorbate.adsorbate);
  useEffect(() => {
    if (!adsorbate) {
      dispatch(fetchAdsorbate(id));
    }
  }, [adsorbate]);

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        const result = await editAdsorbate(id, {...values, id: parseInt(id)});
        if (result.status) {
          setSubmitError(result.response);
        } else {
          displayUpdateMessage();
          history.push(URLS.ADSORBATES_LIST);
        }
      } catch (error) {
        return error;
      }
    }
  };

  if (adsorbate && errorCodes.includes(adsorbate.status)) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return (
    <>
      <FormErrorModal
        errorInfo={submitError && submitError.message}
        onClose={() => setSubmitError(null)}
      />
      <AdsorbateForm
        title="Modificar Adsorbato"
        buttonLabel="Actualizar"
        onSubmit={onSubmit}
        setErrors={(value) => {
          setErrors(value);
        }}
        initialValues={adsorbate}
      />
    </>
  );
};
