import React from "react";
import {Formik, Form as FormikForm} from "formik";
import {PageTitle} from "../../common/PageTitle";
import {
  FormLayout,
  ButtonContainer,
  SingleColumnFormLayout,
} from "./FormStyles";
import {SubmitButton} from "../Button/Button";

export const Form = ({
  title,
  fields,
  initialValues,
  onSubmit,
  buttonLabel,
  errors,
  forceDisable,
  singleColumn = false,
}) => {
  const Layout = singleColumn ? SingleColumnFormLayout : FormLayout;
  return (
    <>
      {title && <PageTitle title={title} />}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSubmit(values, actions);
          actions.setSubmitting(false);
        }}>
        <FormikForm>
          <Layout>{fields}</Layout>

          <ButtonContainer>
            <SubmitButton
              text={buttonLabel}
              disabled={errors || forceDisable}
            />
          </ButtonContainer>
        </FormikForm>
      </Formik>
    </>
  );
};
