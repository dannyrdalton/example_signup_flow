import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import { normalizePhone } from 'modules/Form/Field/field_normalizers'
import { FORM_FIELDS } from '../config/personal_information_config'

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

export const PersonalInformation = (props) => (
  <div>
    <h2>Personal Information</h2>
    <form>
      {FORM_FIELDS.map(field =>
        <Field
          key={field.id}
          name={field.name}
          type={field.type}
          label={field.label}
          component={renderField}
          validate={field.validate}
          normalize={field.normalize} /
        >
      )}
    </form>
    <div>
      <button className="btn btn-default" onClick={props.next} disabled={!props.valid}>Next</button>
    </div>
  </div>
)

export default PersonalInformation
