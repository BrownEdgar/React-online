import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: ''
}

const  onSubmit = values => {
  console.log(values); 
}


const validetionSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required')
})

function YoutubeForm() {

  return (
    <Formik className ='App'
      initialValue = {initialValues}
      validationSchema = {validetionSchema}
      onSubmit = {onSubmit}
    >
      <Form className='App-header'>
      <div className='form-control'>
      <label htmlFor='name'>Name</label>
      <Field type='text' id='name' name='name'/>
      <ErrorMessage name='name' component= {TextError}/>
    </div>
    <div className='form-control'>
      <label htmlFor='email'>E-mail</label>
      <Field type='email' id='email' name='email'/>
     <ErrorMessage name='email'>
      { 
        (errorMsg) => <div className='error'>{errorMsg}</div>
      }
     </ErrorMessage>
      </div>
      <div className='form-control'>
      <label htmlFor='channel'>Channel</label>
      <Field type='text' id='channel' name='channel' />
      <ErrorMessage name='channel' component={TextError}/>
      </div>
      <div className='form-control'>
    <label htmlFor="comments">Comments</label>
    <Field as='textarea' id='comments' name='comments'/>
      </div>
      <div className='form-control'>
    <label htmlFor="address">Address</label>
    <Field name='address'>
    {
       (props) => {
      const  {field,  meta} = props
        console.log('Render props', props);
        
        return (
          <div>
            <input type='text' id='address'{...field}/>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
          </div>
        ) 
       }
    }
    </Field>
      </div>
      <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;

