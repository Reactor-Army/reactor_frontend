import React, {useState, useEffect} from "react";
import {
  PageContainer,
  LoginContainer,
  Title,
  Subtitle,
  FormContainer,
  ErrorMessage,
} from "./LoginRouteStyles";
import {Form, FORM_LAYOUTS} from "../../../components/Form/Form";
import {LOGIN_FORM_INITIAL_VALUES} from "../../../common/constants";
import {FormTextField} from "../../../components/Form/Fields/FormFields";
import {LOGIN_REQUEST_FIELDS} from "../../../common/fields";
import {isSet} from "../../../components/Form/Validation/formValidations";
import {filterBlank} from "../../../components/Create/validations";
import {loginService} from "../../../services/login";
import {URLS} from "../../urls";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";

export const LoginRoute = () => {
  const [errorValues, setErrorValues] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();
  const {loggedIn} = useSelector((state) => state.auth);
  const [showLoader, setShowLoader] = useState(false);

  const onSubmit = async (values) => {
    try {
      setShowLoader(true);
      const result = await loginService(values.email, values.password);
      if (result.status) {
        setSubmitError(result.response);
        setShowLoader(false);
      } else {
        history.push(URLS.HOME);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (loggedIn) {
      history.push(URLS.HOME);
    }
  }, []);

  return (
    <PageContainer>
      {showLoader ? (
        <CircularProgress />
      ) : (
        <LoginContainer>
          <Title>Reactor APP</Title>
          <Subtitle>Iniciar sesión</Subtitle>
          <FormContainer>
            <Form
              layout={FORM_LAYOUTS.SINGLE_COLUMN}
              singleColumn={true}
              initialValues={LOGIN_FORM_INITIAL_VALUES}
              onSubmit={onSubmit}
              buttonLabel="Ingresar"
              errors={filterBlank(errorValues)}
              fields={[
                <FormTextField
                  placeholder="Correo electrónico"
                  key={1}
                  name={LOGIN_REQUEST_FIELDS.EMAIL}
                  error={errorValues[LOGIN_REQUEST_FIELDS.EMAIL]}
                  validate={(value) => {
                    setErrorValues((previousState) => {
                      return {
                        ...previousState,
                        [LOGIN_REQUEST_FIELDS.EMAIL]: isSet(value),
                      };
                    });
                  }}
                />,
                <FormTextField
                  type="password"
                  placeholder="Contraseña"
                  key={2}
                  name={LOGIN_REQUEST_FIELDS.PASSWORD}
                  error={errorValues[LOGIN_REQUEST_FIELDS.PASSWORD]}
                  validate={(value) => {
                    setErrorValues((previousState) => {
                      return {
                        ...previousState,
                        [LOGIN_REQUEST_FIELDS.PASSWORD]: isSet(value),
                      };
                    });
                  }}
                />,
              ]}
            />
          </FormContainer>
          {submitError && <ErrorMessage>{submitError.message}</ErrorMessage>}
        </LoginContainer>
      )}
    </PageContainer>
  );
};
