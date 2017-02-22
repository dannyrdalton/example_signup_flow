import React from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import { DROPDOWN_LIST_CONFIG } from '../config/select_insurance_config'

const renderDropdownList = ({ input, meta, ...rest }) => (
  <DropdownList {...input} {...rest}/>
)

export const SelectInsurance = (props) => (
  <div>
    <h2>Select Insurance</h2>
    <form>
      <div>
        <Field
          name="insurance"
          component={renderDropdownList}
          data={DROPDOWN_LIST_CONFIG.data}
        />
      </div>
    </form>
    <div>
      <button className="btn btn-default" onClick={props.back}>Back</button>
      <button className="btn btn-default" onClick={props.next}>Next</button>
    </div>
  </div>
)

export default SelectInsurance
