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
import {inRange, isPositive} from "../Form/Validation/formValidations";

const initialValues = {
  idAdsorbato: 1,
  idAdsorbente: 1,
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
  const dispatch = useDispatch();
  const [adsorbateItems, setAdsorbateItems] = useState([]);
  const [adsorbentItems, setAdsorbentItems] = useState([]);

  const adsorbates = useSelector(
    (state) => state.adsorbates.adsorbatesWithIupacNotation,
  );

  const adsorbents = useSelector(
    (state) => state.adsorbents.adsorbentsWithParticleSize,
  );

  useEffect(() => {
    if (!adsorbates.length) {
      dispatch(fetchAdsorbatesWithIupacNotation());
    }

    setAdsorbateItems(
      adsorbates.map((adsorbate) => {
        return {label: adsorbate.nombre, value: adsorbate.id};
      }),
    );
  }, [adsorbates]);

  useEffect(() => {
    if (!adsorbents.length) {
      dispatch(fetchAdsorbentsWithParticleSize());
    }

    setAdsorbentItems(
      adsorbents.map((adsorbent) => {
        return {label: adsorbent.nombre, value: adsorbent.id};
      }),
    );
  }, [adsorbents]);

  const onSubmit = async (values) => {
    try {
      await createSystem(values);
      history.push(URLS.PROCESSES_LIST);
    } catch (e) {
      return e.response.data;
    }
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Agregar Sistema"
      fields={[
        <FormSelectorField
          key={1}
          placeholder="Adsorbato"
          items={adsorbateItems}
          name="idAdsorbato"
        />,
        <FormSelectorField
          key={2}
          placeholder="Adsorbente"
          items={adsorbentItems}
          name="idAdsorbente"
        />,
        <FormNumericField
          placeholder="qMax"
          key={3}
          name="qmax"
          validateField={(value) => isPositive(value)}
        />,
        <FormNumericField
          placeholder="Tiempo de equilibrio"
          key={4}
          name="tiempoEquilibrio"
          validateField={(value) => isPositive(value)}
        />,
        <FormNumericField
          placeholder="pH Inicial"
          key={5}
          name="phinicial"
          validateField={(value) => inRange(value, 1, 14)}
        />,
        <FormTextField placeholder="Fuente" key={6} name="fuente" />,
        <FormNumericField
          placeholder="Temperatura"
          key={7}
          name="temperatura"
        />,
        <FormTextField
          placeholder="Observaciones"
          name="observacion"
          key={8}
        />,
        <FormBooleanField key={9} title="Complejacion" name="complejacion" />,
        <FormBooleanField
          key={10}
          title="Intercambio Ionico"
          name="intercambioIonico"
        />,
        <FormBooleanField
          key={11}
          title="Reaccion Quimica"
          name="reaccionQuimica"
        />,
      ]}
    />
  );
};
