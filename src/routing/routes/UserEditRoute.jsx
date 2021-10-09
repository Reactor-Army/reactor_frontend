import React, {useState, useEffect} from "react";
import {UserForm} from "../../components/CustomForms/UserForm";
import {useHistory, useParams} from "react-router-dom";
import {URLS} from "../urls";
import {createUser} from "../../services/users";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../components/Form/FormErrorModal";
import {Redirect} from "react-router-dom";
import {errorCodes} from "../../utils/errorStatusCodes";
import {useSelector, useDispatch} from "react-redux";
import {fetchUser} from "../../redux/userSlice";

export const UserEditRoute = () => {
  const [errors, setErrors] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  let {id} = useParams();

  const user = useSelector((store) => store.user.user);
  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

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
      {user && errorCodes.includes(user.status) ? (
        <Redirect to={URLS.NOT_FOUND} />
      ) : (
        <>
          <FormErrorModal
            errorInfo={submitError && submitError.message}
            onClose={() => setSubmitError(null)}
          />
          <UserForm
            title="Editar usuario"
            buttonLabel="Actualizar"
            onSubmit={onSubmit}
            setErrors={(value) => {
              setErrors(value);
            }}
            initialValues={user}
            enforcePasswordSet={false}
          />
        </>
      )}
    </>
  );
};
