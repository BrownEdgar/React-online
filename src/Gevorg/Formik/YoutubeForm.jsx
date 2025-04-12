import React from 'react'
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    x: ''
  },
  phoneNumbers: ['', ''], 
  phNumbers: {}
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
      initialValues = {initialValues}
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

    <div className='form-control'>
    <label htmlFor='facebook'>Facebook profile</label>
    <Field type='text' id='facebook' name='social.facebook'/>
    </div>

    <div className='form-control'>
    <label htmlFor='x'>X profile</label>
    <Field type='text' id='x' name='social.x'/>
    </div>

    <div className='form-control'>
    <label htmlFor='primaryPn'>Primary Phone number</label>
    <Field type='text' id='primaryPn' name='phoneNumbers[0]'/>
    </div>

    <div className='form-control'>
    <label htmlFor='secondaryPn'>Secondary Phone number</label>
    <Field type='text' id='SecondaryPh' name='phoneNumbers[1]'/>
    </div>

    {/* <div className='form-control'>
    <label>List of form numbers</label>
    <FieldArray name='phNumbers'>
    {
      (fieldArrayProps) => {
        console.log('fieldArrayProps', fieldArrayProps)
        const {push, remove, form} = fieldArrayProps
        const {values} = form
        const {phNumbers} = values
        return <div>
          {
            phNumbers.map((phNumber, index) => (
              <div key={index}>
                <Field name={`phNumbers[${index}]`}/>
                <button type='button' onClick={() => remove(index)}> - </button>
                <button type='button' onClick={() => push('')}> + </button> 
              </div>
            ))
          }
        </div>
      }
    }
    </FieldArray>
    </div> */}

      <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;

