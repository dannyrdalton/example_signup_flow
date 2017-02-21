import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import { normalizePhone } from 'modules/Form/Field/field_normalizers'

const renderField = (field) => (
  <div className={'form-group ' + (field.meta.error && field.meta.touched ? 'has-error ' : '') + (!field.meta.error && field.meta.touched ? 'has-success': '')}>
    <label>{field.label}</label>
    <div>
      <input {...field.input}
        placeholder={field.label}
        type={field.type} 
        className='form-control' /
      >
    </div>
  </div>
)

const required = (value) => {
  return value ? undefined : true
}

const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? true : undefined
}

const alphaNumeric = (value) => {
  return /^[a-z0-9]+$/i.test(value) ? undefined : true
}

export const PersonalInformation = (props) => (
  <div>
    <h2>Personal Information</h2>
    <form>
      <Field
        name='email'
        type='email'
        component={renderField}
        validate={[required, email]}
        label='Email' /
      >
      <Field
        name='firstName'
        id="coolio"
        component={renderField}
        validate={[required, alphaNumeric]}
        label='First Name' /
      >
      <Field
        name='lastName'
        type='text'
        component={renderField}
        validate={[required, alphaNumeric]}
        label='Last Name' /
      >
      <Field
        name='dob'
        type='date'
        component={renderField}
        validate={required}
        label='Date of Birth' /
      >
      <Field
        name='phone'
        type='text'
        component={renderField}
        validate={required}
        label='Phone #'
        normalize={normalizePhone} /
      >
    </form>
    <div>
      <div className="btn btn-default" onClick={props.next} disabled={!props.valid}>Next</div> 
    </div>
  </div>
)

// PersonalInformation.propTypes = {
//   pinfo: React.PropTypes.object.isRequired,
//   save: React.PropTypes.func.isRequired
// }

export default PersonalInformation
