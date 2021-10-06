import React, {useState} from "react";
import {UserForm} from "../../components/Create/UserForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {createUser} from "../../services/users";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";

export const UserCreateRoute = () => {
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        const result = await createUser(values);
        if (result.status) {
          setSubmitError(result.response);
        } else {
          history.push(URLS.USERS);
          displayUpdateMessage();
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
      <UserForm
        title="Agregar usuario"
        buttonLabel="Agregar"
        onSubmit={onSubmit}
        setErrors={setErrors}
      />
    </>
  );
};
