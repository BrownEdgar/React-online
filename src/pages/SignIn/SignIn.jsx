import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from "react";
import './SignIn.scss'


const initialValues = {
  email: '',
  password: '',
}

function SignIn() {
  const handleSubmit = (values) => {
    console.log(values);
    localStorage.setItem('login', "true")

  }
  return (
    <div className='SignIn'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type='email' id='email' name="email" />
            <ErrorMessage component={'p'} name='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type='password' id='password' name="password" />
            <ErrorMessage component={'p'} name='email' />
          </div>
          <div>
            <input type="submit" value={'Reginster'} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;
