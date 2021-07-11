import React, {useState} from "react";
import {SystemCreateForm} from "../../components/Create/SystemCreateForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {createSystem} from "../../services/processes";

export const SystemCreateRoute = () => {
  const [errors, setErrors] = useState(true);
  const history = useHistory();

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
      title="Agregar Sistema"
      onSubmit={onSubmit}
      setErrors={setErrors}
    />
  );
};
