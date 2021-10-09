import React, {useState, useEffect} from "react";
import {Form} from "../Form/Form";
import {
  FormTextField,
  FormSelectorField,
  FormBigTextField,
} from "../Form/Fields/FormFields";
import {USER_FIELDS} from "../../common/fields";
import {
  isSet,
  isValidPassword,
  isValidEmail,
} from "../Form/Validation/formValidations";
import {USER_FORM_INITIAL_VALUES} from "../../common/constants";
import {filterBlank} from "./validations";
import {allNullKeys} from "../../utils/allNullKeys";
import {USER_REQUEST_FIELDS} from "../../common/fields";
import {useSelector, useDispatch} from "react-redux";
import {fetchRoles} from "../../redux/usersSlice";
import {errorCodes} from "../../utils/errorStatusCodes";

export const UserForm = ({
  title,
  onSubmit,
  buttonLabel,
  setErrors,
  initialValues,
  enforcePasswordSet,
}) => {
  const [initial, setInitial] = useState(USER_FORM_INITIAL_VALUES);
  const [rolesOptions, setRolesOptions] = useState([]);
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roles.roles);

  const [errorValues, setErrorValues] = useState(
    allNullKeys(USER_FORM_INITIAL_VALUES),
  );

  useEffect(() => {
    if (initialValues) {
      setInitial({
        nombre: initialValues.nombre,
        apellido: initialValues.apellido,
        email: initialValues.email,
        rol: initialValues.rol.nombre || "",
        descripcion: initialValues.descripcion,
      });
    }
  }, [initialValues]);

  useEffect(() => {
    setErrors(filterBlank(errorValues));
  }, [filterBlank(errorValues)]);

  useEffect(() => {
    if (!roles) {
      dispatch(fetchRoles());
    } else if (!errorCodes.includes(roles.status)) {
      setRolesOptions(
        roles.map((role) => {
          return {label: role.nombreVerbose || "", value: role.nombre || ""};
        }),
      );
    }
  }, [roles]);

  return (
    <Form
      initialValues={initial}
      onSubmit={onSubmit}
      title={title}
      buttonLabel={buttonLabel}
      errors={filterBlank(errorValues)}
      fields={[
        <FormTextField
          placeholder={USER_FIELDS.NAME}
          key={1}
          name={USER_REQUEST_FIELDS.NAME}
          error={errorValues[USER_REQUEST_FIELDS.NAME]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.NAME]: isSet(value),
              };
            });
          }}
        />,
        <FormTextField
          placeholder={USER_FIELDS.LAST_NAME}
          key={2}
          name={USER_REQUEST_FIELDS.LAST_NAME}
          error={errorValues[USER_REQUEST_FIELDS.LAST_NAME]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.LAST_NAME]: isSet(value),
              };
            });
          }}
        />,
        <FormTextField
          placeholder={USER_FIELDS.EMAIL}
          key={3}
          name={USER_REQUEST_FIELDS.EMAIL}
          error={errorValues[USER_REQUEST_FIELDS.EMAIL]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.EMAIL]:
                  isSet(value) || isValidEmail(value),
              };
            });
          }}
        />,
        <FormTextField
          type="password"
          placeholder={USER_FIELDS.PASSWORD}
          key={4}
          name={USER_REQUEST_FIELDS.PASSWORD}
          error={errorValues[USER_REQUEST_FIELDS.PASSWORD]}
          validate={
            enforcePasswordSet
              ? (value) => {
                  setErrorValues((previousState) => {
                    return {
                      ...previousState,
                      [USER_REQUEST_FIELDS.PASSWORD]:
                        isSet(value) || isValidPassword(value),
                    };
                  });
                }
              : (value) => {
                  if (value && value.length > 0) {
                    setErrorValues((previousState) => {
                      return {
                        ...previousState,
                        [USER_REQUEST_FIELDS.PASSWORD]: isValidPassword(value),
                      };
                    });
                  } else {
                    //En los forms de edicion permito el caso particular donde la password esta vacia, eso indica que el usuario no quiere cambiar este campo
                    //y por lo tanto, no aplico la validacion de validez de la pass ingresada
                    setErrorValues((previousState) => {
                      const aux = previousState;
                      delete aux.password;
                      return aux;
                    });
                  }
                }
          }
        />,
        <FormSelectorField
          key={5}
          placeholder={USER_FIELDS.ROLE}
          items={rolesOptions}
          name={USER_REQUEST_FIELDS.ROLE}
          error={errorValues[USER_REQUEST_FIELDS.ROLE]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.ROLE]: isSet(value),
              };
            });
          }}
        />,
        <FormBigTextField
          placeholder={USER_FIELDS.DESCRIPTION}
          key={6}
          name={USER_REQUEST_FIELDS.DESCRIPTION}
        />,
      ]}
    />
  );
};
