import React, {useState} from "react";
import {SystemForm} from "../../components/Create/SystemForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {createSystem} from "../../services/processes";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";

export const SystemCreateRoute = () => {
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        const result = await createSystem(values);
        if (result.status) {
          setSubmitError(result.response);
        } else {
          displayUpdateMessage();
          history.push(URLS.PROCESSES_LIST);
        }
      } catch (error) {
        return error.response.data;
      }
    }
  };
  return (
    <>
      <FormErrorModal
        errorInfo={submitError && submitError.message}
        onClose={() => setSubmitError(null)}
      />
      <SystemForm
        title="Agregar Sistema"
        buttonLabel="Agregar"
        onSubmit={onSubmit}
        setErrors={setErrors}
      />
    </>
  );
};
