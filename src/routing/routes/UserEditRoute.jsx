import React, {useState} from "react";
import {UserForm} from "../../components/CustomForms/UserForm";
import {useHistory, useParams} from "react-router-dom";
import {URLS} from "../urls";
import {createUser} from "../../services/users";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";

export const UserEditRoute = () => {
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();
  let {id} = useParams();

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
        title="Editar usuario"
        buttonLabel="Actualizar"
        onSubmit={onSubmit}
        setErrors={setErrors}
      />
    </>
  );
};
