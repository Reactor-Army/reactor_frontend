import React, {useState} from "react";
import {SystemCreateForm} from "../../components/Create/SystemCreateForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {createSystem} from "../../services/processes";

export const SystemCreateRoute = () => {
  const [errors, setErrors] = useState(true);
  const history = useHistory();

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

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        await createSystem(values);
        history.push(URLS.PROCESSES_LIST);
      } catch (e) {
        return e.response.data;
      }
    }
  };
  return (
    <SystemCreateForm
      onSubmit={onSubmit}
      setErrors={setErrors}
      initialValues={initialValues}
    />
  );
};
