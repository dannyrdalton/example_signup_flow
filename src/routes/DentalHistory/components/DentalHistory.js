import React from 'react'
import { Field } from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import { Link } from 'react-router'
import { FORM_FIELDS } from '../config/dental_history_config'

export const YesOption = (props) => (
  <option value='yes'>Yes</option>
)

export const NoOption = (props) => (
  <option value='no'>No</option>
)

export const UnsureOption = (props) => (
  <option value='unsure'>Unsure</option>
)

const renderDropdownList = ({ input, meta, ...rest }) => (
  <DropdownList {...input} {...rest}/>
)

export const DentalHistory = (props) => (
  <div>
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

// Counter.propTypes = {
//   counter     : React.PropTypes.number.isRequired,
//   doubleAsync : React.PropTypes.func.isRequired,
//   increment   : React.PropTypes.func.isRequired
// }

export default DentalHistory
