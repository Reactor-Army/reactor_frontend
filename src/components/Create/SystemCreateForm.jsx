import React from "react";
//import {createSystem} from "../../services/processes";
//import {processFields} from "./fields";
//import {URLS} from "../../routing/urls";
import {Form} from "../Form/Form";
import {
  FormTextField,
  FormNumericField,
  FormSelectorField,
  FormBooleanField,
} from "../Form/Fields/FormFields";

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
};

export const SystemCreateForm = () => {
  const onSubmit = async (values) => {
    console.log("FORM VALUES: ", values);
    /*try {
      return await createSystem(values);
    } catch (e) {
      return e.response.data;
    }*/
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Agregar Sistema"
      fields={[
        <FormSelectorField
          key={1}
          handleChange={() => {}}
          placeholder="Adsorbato"
          items={["asdsada", "1111"]}
          name="=idAdsorbato"
        />,
        <FormSelectorField
          key={2}
          handleChange={() => {}}
          placeholder="Adsorbente"
          items={["asdsada", "1111"]}
          name="idAdsorbente"
        />,
        <FormNumericField placeholder="qMax" key={3} name="qmax" />,
        <FormNumericField
          placeholder="Tiempo de equilibrio"
          key={4}
          name="tiempoEquilibrio"
        />,
        <FormNumericField placeholder="pH Inicial" key={5} name="phinicial" />,
        <FormTextField placeholder="Fuente" key={6} name="fuente" />,
        <FormBooleanField key={7} title="Complejacion" name="complejacion" />,
        <FormBooleanField
          key={8}
          title="Intercambio Ionico"
          name="intercambioIonico"
        />,
        <FormBooleanField
          key={9}
          title="Reaccion Quimica"
          name="reaccionQuimica"
        />,
        <FormTextField
          placeholder="Observaciones"
          name="observacion"
          key={10}
        />,
      ]}
    />
  );
};
