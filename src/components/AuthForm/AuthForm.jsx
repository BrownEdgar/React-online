import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import * as Yup from 'yup'
import './AuthForm.css'
const initialValues = {
  username: '',
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().matches(/((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{6,18}\w)/, "invalid password").required('Required')
})


export default function AuthForm({ handleSubmit }) {
  return (
    <div className='AuthForm'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
      >

        {
          (formik) => {

            return (
              <Form>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage name="email" component='p' className='error' />
                </div>
                <div>
                  <label htmlFor="username">Username</label>
                  <Field type="text" name="username" id="username" />
                  <ErrorMessage name="username" component='p' className='error' />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" id="password" />
                  <ErrorMessage name="password" component='p' className='error' />
                </div>

                <div>
                  <input type="submit" value="Register" disabled={!formik.isValid || formik.isSubmitting} />


                </div>
              </Form>
            )
          }

        }
      </Formik>
    </div>
  );
}
