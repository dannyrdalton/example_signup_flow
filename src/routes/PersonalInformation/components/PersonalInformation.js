import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import { FORM_FIELDS } from '../config/personal_information_config'

export const PersonalInformation = (props) => (
  <div>
    <h2>Personal Information</h2>
    <form>
      {FORM_FIELDS.map(field =>
        <Field
          {...field} /
        >
      )}
    </form>
    <div>
      <button className="btn btn-default" onClick={props.next} disabled={!props.valid}>Next</button>
    </div>
  </div>
)

export default PersonalInformation
