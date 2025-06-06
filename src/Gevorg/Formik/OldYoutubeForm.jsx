import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const  onSubmit = values => {
  console.log(values); 
}

const validate = values => {
  let errors = {}
  if(!values.name) {
    errors.name = 'Required!'
  }
  if(!values.email) {
    errors.email = 'Required'
  } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
   errors.email ='invalid email format'
  }
  if(!values.channel) {
    errors.channel = 'Required'
  }

  return errors
}

const validetionSchema = Yup.object({
  name: Yup.string().required('required'),
  email: Yup.string().email('Invalid email format').required('required'),
  channel: Yup.string().required('required')
})

function OldYoutubeForm() {
 const formik = useFormik({
    initialValues,
    onSubmit,
     validetionSchema,
     validate
  })

  console.log('Visited fields', formik.touched);
  

  return (
    <div className='App'>
      <form className='App-header' onSubmit={formik.handleSubmit}>
      <div className='form-control'>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
    </div>
    <div className='form-control'>
      <label htmlFor='email'>E-mail</label>
      <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
      {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      </div>
      <div className='form-control'>
      <label htmlFor='channel'>Channel</label>
      <input type='text' id='channel' name='channel'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}/>
      {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;

