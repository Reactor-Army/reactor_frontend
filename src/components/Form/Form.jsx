import React from "react";
import {Formik, Form as FormikForm, Field} from "formik";
import {PageTitle} from "../../common/PageTitle";
import {FormLayout, FieldContainer} from "./FormStyles";

export const Form = (title, fields, onSubmit) => (
  <>
    <PageTitle title={(title, fields)} />
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}>
      {() => (
        <FormikForm>
          <FormLayout>
            {fields.map((field, index) => {
              return <FieldContainer key={index}>{field}</FieldContainer>;
            })}

            <Field name="username" />

            <button type="submit" onClick={onSubmit}>
              Submit
            </button>
          </FormLayout>
        </FormikForm>
      )}
    </Formik>
  </>
);

/*
   <Field name="email" validate={validateEmail} />
    <ErrorMessage name="email" />
*/
