import React from "react";
import {Formik, Form as FormikForm} from "formik";
import {PageTitle} from "../../common/PageTitle";
import {
  FormLayout,
  SingleColumnFormLayout,
  SingleRowFormLayout,
} from "./FormStyles";
import {FormSubmitButton} from "./FormSubmitButton";

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
  if (!Layout) {
    throw new Error(`Layout pasado al formulario inválido: ${layout}`);
  }
  const Button = (
    <FormSubmitButton
      buttonLabel={buttonLabel}
      disabled={errors || forceDisable}
    />
  );
  let children = fields;
  if (layout === FORM_LAYOUTS.SINGLE_ROW) {
    children = [...fields, Button];
  }
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
          <Layout>{children}</Layout>
          {layout !== FORM_LAYOUTS.SINGLE_ROW && <Button />}
        </FormikForm>
      </Formik>
    </>
  );
};
