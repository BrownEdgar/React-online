import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup'
import './App.scss';

const initialValues = {
  username: 'John',
  password: '',
  email: 'abcd@gmail.com',
  age: 21
}

const handleSubmit = (values) => {
  console.log(values);
}

const validationSchema = yup.object({
  username: yup.string()
    .matches(/^[A-Z]/, 'Username must by start with Uppercase')
    .min(3)
    .max(20)
    .required("Required"),
  password: yup.string().required("Required"),
  email: yup.string().lowercase().email('invalid email format').required("Required"),
  age: yup.number().integer().positive().min(18, "user must by chapahas").max(70).required("Required")
}).strict(true)

function App() {
  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={true}
      >
        {
          (formik) => {
            console.log(formik)
            return (

              <Form>
                {
                  Object.keys(formik.errors).length > 0 ? (
                    Object.keys(formik.errors).map(field => {
                      return <h3 key={field}>  Լրացրեք Ճիշտ <span>{field}</span> դաշտը !!!</h3>
                    })
                  ) : null
                }
                <Field type="text" name='username' placeholder='username' />
                <q></q>
                <Field type="email" name='email' placeholder='email' />
                <ErrorMessage name='email'>
                  {
                    (message) => (
                      <div>
                        <p className='error'>{message}</p>
                      </div>
                    )
                  }
                </ErrorMessage>

                <Field type="password" name='password' placeholder='password' />
                <ErrorMessage name='password' component="p" className='error' />

                <Field type="number" name='age' placeholder='age' />
                <ErrorMessage name='age' component="p" className='error' />
                <Field type="submit" value="save" name="sss" disabled={!formik.isValid} />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  );
}

export default App;
