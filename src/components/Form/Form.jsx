import React from "react";
import {Formik, Form as FormikForm} from "formik";
import {PageTitle} from "../../common/PageTitle";
import {FormLayout, ButtonContainer} from "./FormStyles";
import {SubmitButton} from "../Button/Button";

export const Form = ({
  title,
  fields,
  initialValues,
  onSubmit,
  buttonLabel,
  errors,
}) => {
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
          <FormLayout>{fields}</FormLayout>

          <ButtonContainer>
            <SubmitButton text={buttonLabel} disabled={errors} />
          </ButtonContainer>
        </FormikForm>
      </Formik>
    </>
  );
};
