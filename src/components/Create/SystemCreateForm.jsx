import React, {useState, useEffect} from "react";
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
import {PROCESS_FIELDS} from "../../common/fields";

export const SystemCreateForm = ({onSubmit, setErrors, initialValues}) => {
  const dispatch = useDispatch();
  const [errorValues, setErrorValues] = useState({
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
    if (!adsorbates.length) {
      dispatch(fetchAdsorbatesWithIupacNotation());
    }

    if (!adsorbents.length) {
      dispatch(fetchAdsorbentsWithParticleSize());
    }
  }, []);

  const errorsSet = Object.keys(errorValues).some((key) => {
    return errorValues[key] !== undefined;
  });

  setErrors(errorsSet);

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
          error={errorValues["idAdsorbato"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, idAdsorbato: isSet(value)};
            });
          }}
        />,
        <FormSelectorField
          key={2}
          placeholder={PROCESS_FIELDS.ADSORBENT}
          items={adsorbents}
          name="idAdsorbente"
          error={errorValues["idAdsorbente"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, idAdsorbente: isSet(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={PROCESS_FIELDS.QMAX}
          key={3}
          name="qmax"
          error={errorValues["qmax"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, qmax: isPositive(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={PROCESS_FIELDS.EQUILIBRIUM_TIME}
          key={4}
          name="tiempoEquilibrio"
          error={errorValues["tiempoEquilibrio"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, tiempoEquilibrio: isPositive(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={PROCESS_FIELDS.INITIAL_PH}
          key={5}
          name="phinicial"
          error={errorValues["phinicial"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                phinicial: inRange(value, 1, 14),
              };
            });
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
