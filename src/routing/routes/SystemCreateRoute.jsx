import React, {useState} from "react";
import {SystemForm} from "../../components/Create/SystemForm";
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
      } catch (error) {
        return error.response.data;
      }
    }
  };
  return (
    <SystemForm
      title="Agregar Sistema"
      buttonLabel="Agregar"
      onSubmit={onSubmit}
      setErrors={setErrors}
    />
  );
};
