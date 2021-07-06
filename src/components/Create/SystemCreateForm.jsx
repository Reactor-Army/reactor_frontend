import React, {useState, useEffect} from "react";
import {createSystem} from "../../services/processes";
import {URLS} from "../../routing/urls";
import {Form} from "../Form/Form";
import {
  FormTextField,
  FormNumericField,
  FormSelectorField,
  FormBooleanField,
} from "../Form/Fields/FormFields";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {fetchAdsorbentsWithParticleSize} from "../../redux/adsorbentsSlice";
import {inRange, isPositive, isSet} from "../Form/Validation/formValidations";
import {useHistory} from "react-router";
import {PROCESS_FIELDS} from "../../common/fields";

const initialValues = {
  idAdsorbato: null,
  idAdsorbente: null,
  tiempoEquilibrio: 0,
  qmax: 0,
  phinicial: 1,
  fuente: "",
  complejacion: false,
  intercambioIonico: false,
  reaccionQuimica: false,
  observacion: "",
  temperatura: 0,
};

export const SystemCreateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    qmax: null,
    tiempoEquilibrio: null,
    phinicial: null,
  });

  const adsorbates = useSelector((state) =>
    state.adsorbates.adsorbatesWithIupacNotation.map((adsorbate) => {
      return {label: adsorbate.nombre, value: adsorbate.id};
    }),
  );

  const adsorbents = useSelector((state) =>
    state.adsorbents.adsorbentsWithParticleSize.map((adsorbent) => {
      return {label: adsorbent.nombre, value: adsorbent.id};
    }),
  );

  useEffect(() => {
    if (!adsorbates.length && !adsorbents.length) {
      dispatch(fetchAdsorbatesWithIupacNotation());
      dispatch(fetchAdsorbentsWithParticleSize());
    }
  }, []);

  let temp = {}; //This temp variable is needed because there's an async issue on the way formik handles the validation, and the values don' update properly

  const errorsSet = Object.keys(errors).some(function (key) {
    return errors[key] !== undefined;
  });

  const onSubmit = async (values) => {
    if (!errorsSet) {
      try {
        await createSystem(values);
        history.push(URLS.PROCESSES_LIST);
      } catch (e) {
        return e.response.data;
      }
    }
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Agregar Sistema"
      errors={errorsSet}
      fields={[
        <FormSelectorField
          key={1}
          placeholder={PROCESS_FIELDS.ADSORBATE}
          items={adsorbates}
          name="idAdsorbato"
          error={errors["idAdsorbato"]}
          validate={(value) => {
            temp["idAdsorbato"] = isSet(value);
            setErrors({...errors, ...temp});
          }}
        />,
        <FormSelectorField
          key={2}
          placeholder={PROCESS_FIELDS.ADSORBENT}
          items={adsorbents}
          name="idAdsorbente"
          error={errors["idAdsorbente"]}
          validate={(value) => {
            temp["idAdsorbente"] = isSet(value);
            setErrors({...errors, ...temp});
          }}
        />,
        <FormNumericField
          placeholder={PROCESS_FIELDS.QMAX}
          key={3}
          name="qmax"
          error={errors["qmax"]}
          validate={(value) => {
            temp["qmax"] = isPositive(value);
            setErrors({...errors, ...temp});
          }}
        />,
        <FormNumericField
          placeholder={PROCESS_FIELDS.EQUILIBRIUM_TIME}
          key={4}
          name="tiempoEquilibrio"
          error={errors["tiempoEquilibrio"]}
          validate={(value) => {
            temp["tiempoEquilibrio"] = isPositive(value);
            setErrors({...errors, ...temp});
          }}
        />,
        <FormNumericField
          placeholder={PROCESS_FIELDS.INITIAL_PH}
          key={5}
          name="phinicial"
          error={errors["phinicial"]}
          validate={(value) => {
            temp["phinicial"] = inRange(value, 1, 14);
            setErrors({...errors, ...temp});
          }}
        />,
        <FormTextField
          placeholder={PROCESS_FIELDS.SOURCE}
          key={6}
          name="fuente"
        />,
        <FormNumericField
          placeholder={PROCESS_FIELDS.TEMPERATURE}
          key={7}
          name="temperatura"
        />,
        <FormTextField
          placeholder={PROCESS_FIELDS.NOTES}
          name="observacion"
          key={8}
        />,
        <FormBooleanField
          key={9}
          title={PROCESS_FIELDS.COMPLEXATION}
          name="complejacion"
        />,
        <FormBooleanField
          key={10}
          title={PROCESS_FIELDS.IONIC_INTERCHANGE}
          name="intercambioIonico"
        />,
        <FormBooleanField
          key={11}
          title={PROCESS_FIELDS.CHEMICAL_REACTION}
          name="reaccionQuimica"
        />,
      ]}
    />
  );
};
