import React from "react";
import {Formik, Form as FormikForm} from "formik";
import {PageTitle} from "../../common/PageTitle";
import {
  ButtonContainer,
  FormContainer,
  FormLayout,
  SingleColumnFormLayout,
  SingleRowFormLayout,
} from "./FormStyles";
import {SubmitButton} from "../Button/Button";

export const FORM_LAYOUTS = {
  SINGLE_COLUMN: "SINGLE_COLUMN",
  SINGLE_ROW: "SINGLE_ROW",
  ROWS: "ROWS",
};

export const Form = ({
  title,
  fields,
  initialValues,
  onSubmit,
  buttonLabel,
  errors,
  forceDisable,
  layout = FORM_LAYOUTS.ROWS,
}) => {
  const LAYOUTS_TO_COMPONENT_MAP = {
    [FORM_LAYOUTS.SINGLE_COLUMN]: SingleColumnFormLayout,
    [FORM_LAYOUTS.SINGLE_ROW]: SingleRowFormLayout,
    [FORM_LAYOUTS.ROWS]: FormLayout,
  };

  const Layout = LAYOUTS_TO_COMPONENT_MAP[layout];
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
          <FormContainer layout={layout}>
            <Layout>{fields}</Layout>
            <ButtonContainer>
              <SubmitButton
                text={buttonLabel}
                disabled={errors || forceDisable}
              />
            </ButtonContainer>
          </FormContainer>
        </FormikForm>
      </Formik>
    </>
  );
};
