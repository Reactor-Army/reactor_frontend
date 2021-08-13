import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {fetchAdsorbate} from "../../redux/adsorbateSlice";
import {editAdsorbate} from "../../services/adsorbates";
import {useDispatch, useSelector} from "react-redux";
import {URLS} from "../urls";
import {AdsorbateForm} from "../../components/Create/AdsorbateForm";
import {CommonPage} from "../../components/CommonPage/CommonPage";
import {Redirect} from "react-router-dom";

export const AdsorbateEditRoute = () => {
  const [errors, setErrors] = useState(true);
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
        await editAdsorbate(id, {...values, id: parseInt(id)});
        history.push(URLS.ADSORBATES_LIST);
      } catch (e) {
        return e;
      }
    }
  };

  if (adsorbate === 400 || adsorbate === 404) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return (
    <CommonPage>
      <AdsorbateForm
        title="Modificar Adsorbato"
        buttonLabel="Actualizar"
        onSubmit={onSubmit}
        setErrors={(value) => {
          setErrors(value);
        }}
        initialValues={adsorbate}
      />
    </CommonPage>
  );
};
