import React from "react";
import {Formik, Form as FormikForm, Field} from "formik";
import {PageTitle} from "../../common/PageTitle";
import {FormLayout} from "./FormStyles";
import {TextField} from "./Fields/TextField";
export const Form = ({title, onSubmit}) => {
  console.log(onSubmit);

  return (
    <>
      <PageTitle title={title} />
      <Formik
        initialValues={{email: "", color: "red", firstName: "", lastName: ""}}
        onSubmit={onSubmit}>
        <FormikForm>
          <FormLayout>
            <Field name="test" placeholder="test" component={TextField} />
          </FormLayout>

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
