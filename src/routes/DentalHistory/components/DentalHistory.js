import React from 'react'
import { Field } from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import { Link } from 'react-router'
import { FORM_FIELDS } from '../config/dental_history_config'

export const DentalHistory = (props) => (
  <div className="dental-history">
    <h2>Dental History</h2>
    <form>
      {FORM_FIELDS.map(field =>
        <Field
          {...field}
        />
      )}
    </form>
    <div>
      <div className="btn btn-default" onClick={props.back}>Back</div>
      <div className="btn btn-default" onClick={props.next}>Next</div>
    </div>
  </div>
)

DentalHistory.propTypes = {
  dentalHistory: React.PropTypes.object.isRequired,
  back: React.PropTypes.func.isRequired,
  next: React.PropTypes.func.isRequired
}

export default DentalHistory
