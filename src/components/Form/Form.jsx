import React from "react";
import {Formik, Form as FormikForm} from "formik";
import {PageTitle} from "../../common/PageTitle";
import {FormLayout} from "./FormStyles";
export const Form = ({title, fields, initialValues, onSubmit}) => {
  return (
    <>
      <PageTitle title={title} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSubmit(values, actions);
          actions.setSubmitting(false);
        }}>
        <FormikForm>
          <FormLayout>{fields}</FormLayout>

          <button type="submit">Submit</button>
        </FormikForm>
      </Formik>
    </>
  );
};

/*
   <Field name="email" validate={validateEmail} />
    <ErrorMessage name="email" />
*/
