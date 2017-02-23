import React from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import { FORM_FIELDS } from '../config/select_insurance_config'

export const SelectInsurance = (props) => (
  <div>
    <h2>Select Insurance</h2>
    <form>
      <div>
        {FORM_FIELDS.map(field =>
          <Field
            {...field}
          />
        )}
      </div>
    </form>
    <div>
      <button className="btn btn-default" onClick={props.back}>Back</button>
      <button className="btn btn-default" onClick={props.next}>Next</button>
    </div>
  </div>
)

export default SelectInsurance
